/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    var ret = [];
       
   for (var i = left; i <= right; i++) {
        if (selfDivisible(i)) {
            ret.push(i);
        }
       
    }
    return ret;
    
}

var selfDivisible =function (num) {
    var copy = num;
    while (copy !== 0) {
        var digit = copy % 10;
        copy = Math.floor(copy / 10);
        if (digit === 0 || num % digit !== 0) {
            return false;
        }
    }
    return true;
    
    /*
    var numStr = num.toString();
    if (numStr.indexOf("0") !== -1) {
        return false;
    }
    
    for (var i = 0; i < numStr.length; i++) {
        if (num % parseInt(numStr[i]) !== 0) {
            return false;
        }
    }
    return true;
    */
};    


