/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
*/

/**
 * @param {string} s
 * @return {number}
 */
 

var firstUniqChar = function(s) {
    var count = {};
    
    if (s.length == 0)
        return -1;
    if (s.length == 1)
        return 0;
    
    for (var i = 0; i < s.length; i++) {
        if (count[s.charAt(i)])
            count[s.charAt(i)]++;
        else 
            count[s.charAt(i)] = 1;
    }
    
    for (var elem in count) {
        if (count[elem] == 1)
            return s.indexOf(elem); 
    }
    return -1;
    
/*
    if (s.length == 0)
        return -1;
    if (s.length == 1)
        return 0;
    
    for (var i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) == s.lastIndexOf(s[i]))
            return i;
    }
    
    return -1;    
*/
};
