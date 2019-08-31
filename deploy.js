require('dotenv').config();
const fs = require('fs');
const AWS = require('aws-sdk');
const mime = require('mime');
const colors = require('colors');
const { promisify } = require('util');

const ENV = {
    credential: {
        key: process.env.AWS_KEY,
        secret: process.env.AWS_SECRET
    },
    region: process.env.AWS_REGION,
    bucket: process.env.AWS_S3_BUCKET
};

const credentials = new AWS.Credentials(ENV.credential.key, ENV.credential.secret);
const config = new AWS.Config({credentials, region: ENV.region});
const S3 = new AWS.S3(config);

const readFile = promisify(fs.readFile);
const listFileInDirectory = promisify(fs.readdir);

const retrieveFileName = (filePath) => {
    return filePath.split('/').slice(1).join('/');
};

const isDirectory = (filePath) => {
   return fs.lstatSync(filePath).isDirectory()
};

const isFile = (filePath) => {
    return fs.lstatSync(filePath).isFile()
};

const retrieveExtensionFromFile = (filePath) => {
    return filePath.split('/').reverse()[0].split('.').reverse()[0]; // lol
};

const contentTypeFromFile = (filePath) => {
    const fileExtension = retrieveExtensionFromFile(filePath);
    return mime.getType(fileExtension);
};

const listAllFileInDirectory = async (directory) => {
    let fileList = [];

    const fileInDirectory = await listFileInDirectory(directory);

    for(let i = 0; i < fileInDirectory.length; i++) {
        if (isDirectory(directory + fileInDirectory[i])) {
            fileList = fileList.concat(await listAllFileInDirectory(directory + fileInDirectory[i] + '/'));
        } else {
            fileList.push(directory + fileInDirectory[i]);
        }
    }

    return fileList
};

const uploadFileToS3 = async (filePath) => {
    if (isFile(filePath)) {
        const fileName = retrieveFileName(filePath);
        const fileToUpload = await readFile(filePath);
        const params = {
            Bucket: ENV.bucket,
            Key: fileName,
            Body: fileToUpload,
            ContentType: contentTypeFromFile(filePath)
        };

        S3.upload(params, (err) => {
            if (err) throw err;
        });
    }
};

module.exports = async function() {
    if(fs.existsSync('build/')) {
        const fileLists = await listAllFileInDirectory('build/');
        for(let i = 0; i < fileLists.length; i++) {
            console.log(`Uploading file: ${fileLists[i]}`.green);
            await uploadFileToS3(fileLists[i]);
        }
    } else {
        console.log('No build have been found, skipping deployment'.red);
        console.log('Try running: yarn build'.red);
    }
 }();
