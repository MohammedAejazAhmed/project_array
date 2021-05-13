//call back function

function cb(elements, index) {
    console.log(elements[index]);
}

function each1(elements, cb) {

    //first check if 'elements' is an array or not

    if (Array.isArray(elements)) {
        for (let i = 0; i < elements.length; i++) {
            cb(elements, i);
        }
    } else {
        console.log("Parameter passed is not an array so cannot log elements");
    }
}

module.exports = {
    each1,
    cb
}