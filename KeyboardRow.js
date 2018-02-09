/*
Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard 

Example 1:
Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]
Note:
You may use one character in the keyboard more than once.
You may assume the input string will only contain letters of alphabet.

*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    return words.filter(w => /^([qwertyuiop]*|[asdfghjkl]*|[zxcvbnm]*)$/i.test(w));

};