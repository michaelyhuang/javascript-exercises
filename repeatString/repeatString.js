const repeatString = function(str, i) {
    let result = '';
    if (i < 0){
        return('ERROR')
    } else{
        while (i > 0) {
            result = result + str;
            i--;
        }
    }
    return(result)
}

module.exports = repeatString
