const reverseString = function(str) {
    let splitString = str.split('');
    let reversedArray = splitString.reverse();
    let reversedString = reversedArray.join('');
    return reversedString
}

module.exports = reverseString
