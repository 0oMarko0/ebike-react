import axios from 'axios';

export default axios.create({
    baseURL: 'http://ebike-prod.us-east-1.elasticbeanstalk.com',
});