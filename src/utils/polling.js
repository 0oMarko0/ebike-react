/* Taken from https://davidwalsh.name/javascript-polling
* all credit to David Walsh */

let stop = false;

const poll = (fn, timeout, interval) => {
    const endTime = Number(new Date()) + (timeout || 2000);
    interval = interval || 100;

    const checkCondition = function (resolve, reject) {
        // If the condition is met, we're done!
        const result = fn();
        if (result) {
            resolve(result);
        }
        // If the condition isn't met but the timeout hasn't elapsed, go again
        else if (Number(new Date()) < endTime && !stop) {
            setTimeout(checkCondition, interval, resolve, reject);
        }
        // Didn't match and too much time, reject!
        else {
            reject();
        }
    };

    return new Promise(checkCondition);
};

export const startPolling = () => {
    stop = false;
};

export const stopPolling = () => {
    stop = true;
};

export default poll;