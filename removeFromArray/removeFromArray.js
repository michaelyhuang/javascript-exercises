const removeFromArray = function(arr) {
    let args = Array.prototype.slice.call(arguments, 1);
    let i = 0;
    while (i < args.length){
        let element = args[i];
        arr = removeAllElements(arr, element);
        i++;
    }
   return arr;
}

const removeOneElement = function(arr, el){
    let index = arr.indexOf(el);
    arr.splice(index, 1);
    return arr;
}

const removeAllElements = function(arr,el){
    if (arr.includes(el)){
        while (arr.includes(el)){
            arr = removeOneElement(arr,el);
            return arr;
        } 
    } else {
        return arr;
    }
}

module.exports = removeFromArray
