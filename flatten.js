let array = [];

function flatten1(elements) {

    if (Array.isArray(elements)) {
        for (let i = 0; i < elements.length; i++) {
            flatten1(elements[i]);
        }
    } else {
        array.push(elements);
    }
}

module.exports = {
    flatten1,
    array
}