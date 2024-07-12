// Write a function that returns the longest non-repeating substring for a string input.
// Examples

// longestNonrepeatingSubstring("abcabcbb") ➞ "abc"

// longestNonrepeatingSubstring("aaaaaa") ➞ "a"

// longestNonrepeatingSubstring("abcde") ➞ "abcde"

// longestNonrepeatingSubstring("abcda") ➞ "abcd"

// Notes

//     If multiple substrings tie in length, return the one which occurs first.
//     Bonus: Can you solve this problem in linear time?

// aaccddeeffb

// function longestNonrepeatingSubstring(str) {
// 	let longest = "";
//     let current = "";
//     let long_len = longest.length;

//     for (let i = 0; i < str.length; i++) {
//         // if (long_len >= str.length - i){
//         //     return longest;
//         // }

//         if (current.includes(str[i])) {
//             if (current.length > longest.length) {
//                 longest = current;
//                 current = "" + str[i];
//             }
//             else {
//                 current = "" + str[i];
//             } 

            
//         }

//         else {
//             current += str[i];
//         }

//     }

//     return longest.length > current.length ? longest : current;
// }

// function longestNonrepeatingSubstring(str) {
//     for (let i = str.length - 1; i >= 0; i--) {
//         if (!(str.slice(0, i).includes(str[i]))) {
//             return str.slice(0, i + 1);
//         }
//     }
// }

// function longestNonrepeatingSubstring(s) {
//     let lastSeen = {};
//     let start = 0;
//     let maxLen = 0;
//     let maxStart = 0;
    
//     for (let end = 0; end < s.length; end++) {
//         let char = s[end];
//         if (char in lastSeen && lastSeen[char] >= start) {
//             start = lastSeen[char] + 1;
//         }
//         lastSeen[char] = end;
//         let currentLen = end - start + 1;
//         if (currentLen > maxLen) {
//             maxLen = currentLen;
//             maxStart = start;
//         }
//     }
    
//     return s.substring(maxStart, maxStart + maxLen);
// }



// function longestNonrepeatingSubstring(str) {
//     let matches = []
//     let l = 0;
//     let longest_len = 0;

//     let

    
//     for (let i = 1; i <  str.length; i++) {
//      Add if statement along the lines;
//          str.slice(start,i).includes(i)?
//          start = str.indexOf(i)?

//     }

//     return matches
// }


console.log(longestNonrepeatingSubstring("abcabcbb")) // ➞ "abc"
// console.log(longestNonrepeatingSubstring("aaaaaa")) // ➞ "a"
// console.log(longestNonrepeatingSubstring("abcde")) // ➞ "abcde"
// console.log(longestNonrepeatingSubstring("abcda")) // ➞ "abcd"

// console.log(longestNonrepeatingSubstring("abcabcbb")) //, "abc")
// console.log(longestNonrepeatingSubstring("aaaaaa")) //, "a")
// console.log(longestNonrepeatingSubstring("abcde")) // "abcde")
// console.log(longestNonrepeatingSubstring("abcda")) //, "abcd")
// console.log(longestNonrepeatingSubstring("aaccddeeffb")) //, "ac")
// console.log(longestNonrepeatingSubstring("abdde")) //, "abd")
// console.log(longestNonrepeatingSubstring("ccdddcccc")) //, "cd")
// console.log(longestNonrepeatingSubstring("cdxdxccxc")) //, "cdx")
// console.log(longestNonrepeatingSubstring("abddefgh")) //, "defgh")
// console.log(longestNonrepeatingSubstring("abcdabcd")) //, "abcd")
// console.log(longestNonrepeatingSubstring("abddebcc")) //, "debc")
// console.log(longestNonrepeatingSubstring("xyxxyzyzy")) //, "xyz")
// console.log(longestNonrepeatingSubstring("kjlmjsdeee")) //, "lmjsde")
console.log(longestNonrepeatingSubstring("kjlmjsdfew")) //, "lmjsdfew")
console.log(longestNonrepeatingSubstring("kjlmjsdfewii")) //, "lmjsdfewi")
console.log(longestNonrepeatingSubstring("kjlmjjiiiidfewii")) //, "idfew")
console.log(longestNonrepeatingSubstring("kjlmjjiiiidfiwii")) //, "kjlm")

// establish a left and right bound which you can slice the string by. 
// check that i in the slice.  if it isn't right bound increases by one.
// if it is longest == slice. then left bound of slice == i. continue the process
// if another repating letter is found and current is longer than longest, logest == current.

// function longestNonrepeatingSubstring(s) {
//     let lastSeen = {};
//     let start = 0;
//     let maxLen = 0;
//     let maxStart = 0;
    
//     for (let end = 0; end < s.length; end++) {
//         let char = s[end];
//         if (char in lastSeen && lastSeen[char] >= start) {
//             start = lastSeen[char] + 1;
//         }
//         lastSeen[char] = end;
//         let currentLen = end - start + 1;
//         if (currentLen > maxLen) {
//             maxLen = currentLen;
//             maxStart = start;
//         }
//     }
    
//     return s.substring(maxStart, maxStart + maxLen);
// }