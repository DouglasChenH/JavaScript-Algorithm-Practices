/*
Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.

Example 1:
Input: "UD"
Output: true
Example 2:
Input: "LL"
Output: false
*/

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    if (moves.length % 2 !== 0) {
        return false;
    }
    
    var ver = getLen(/U/ig) === getLen(/D/ig) ? true : false;
    var hor = getLen(/L/ig) === getLen(/R/ig) ? true : false;
    return ver && hor;
    
    function getLen(re) {
        var match = moves.match(re); // maybe get a null object 
        return  match ? match.length : 0;
    }
    /* method 2
    var RCounter = 0;
    var LCounter = 0;
    var UCounter = 0;
    var DCounter = 0;
    
    for (var i = 0; i < moves.length; i++) {
        var currentMove = moves[i];
        if (currentMove == "R") {
            RCounter++;
        }
        else if (currentMove == "L") {
            LCounter++;
        }
        else if (currentMove == "U") {
            UCounter++;
        }
        else {
            DCounter++;
        }
            
    }
    
    if (RCounter == LCounter && UCounter == DCounter) {
        return true;
    }
    
    return false;
    */
};
