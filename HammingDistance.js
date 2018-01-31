/*
he Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.

*/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    /* method 1; 98ms; 114/114 pass
    var XORNum = (x ^ y).toString(2);
    var countOne = 0;
    
    for (var i = 0; i < XORNum.length; i++) {
        if (XORNum[i] == 1)
            countOne++;
    }
    return countOne;
    */
    
    //method 2; 116ms; 114/114 pass
    return (x ^ y).toString(2).split('').filter(num => num === "1").length;
 };
