// Write a function that returns the longest non-repeating substring for a string input.
// Examples

// longestNonrepeatingSubstring("abcabcbb") ➞ "abc"

// longestNonrepeatingSubstring("aaaaaa") ➞ "a"

// longestNonrepeatingSubstring("abcde") ➞ "abcde"

// longestNonrepeatingSubstring("abcda") ➞ "abcd"

// Notes

//     If multiple substrings tie in length, return the one which occurs first.
//     Bonus: Can you solve this problem in linear time?

function longestNonrepeatingSubstring(str) {
    let last_seen = {};
    let start = 0;
    let max_len = 0;
    let max_start = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] in last_seen && last_seen[str[i]] >= start) {
            start = last_seen[str[i]] + 1;  
        }

        last_seen[str[i]] = i;
        let current_len = i - start + 1;

        if (current_len > max_len) {
            max_len = current_len;
            max_start = start;
        }
    }

    return str.substring(max_start,max_start + max_len);
}

console.log(longestNonrepeatingSubstring("abcabcbb")) //, "abc")
console.log(longestNonrepeatingSubstring("aaaaaa")) //, "a")
console.log(longestNonrepeatingSubstring("abcde")) // "abcde")
console.log(longestNonrepeatingSubstring("abcda")) //, "abcd")
console.log(longestNonrepeatingSubstring("aaccddeeffb")) //, "ac")
console.log(longestNonrepeatingSubstring("abdde")) //, "abd")
console.log(longestNonrepeatingSubstring("ccdddcccc")) //, "cd")
console.log(longestNonrepeatingSubstring("cdxdxccxc")) //, "cdx")
console.log(longestNonrepeatingSubstring("abddefgh")) //, "defgh")
console.log(longestNonrepeatingSubstring("abcdabcd")) //, "abcd")
console.log(longestNonrepeatingSubstring("abddebcc")) //, "debc")
console.log(longestNonrepeatingSubstring("xyxxyzyzy")) //, "xyz")
console.log(longestNonrepeatingSubstring("kjlmjsdeee")) //, "lmjsde")
console.log(longestNonrepeatingSubstring("kjlmjsdfew")) //, "lmjsdfew")
console.log(longestNonrepeatingSubstring("kjlmjsdfewii")) //, "lmjsdfewi")
console.log(longestNonrepeatingSubstring("kjlmjjiiiidfewii")) //, "idfew")
console.log(longestNonrepeatingSubstring("kjlmjjiiiidfiwii")) //, "kjlm")

// establish object variable called last_seen which contains a list of all the characters in str and their indexes (these will be the 
// last indexes of that particular character once we have looped through the whole string).

// establish start variable. this will be the start of the slice that we are checking for repeats.  If a repeat is found within a slice
// then this variable equals the index of this repeating character from the last_seen variable plus one so that the next slice that is analysed 
// for repeats begins one place after the index of the repeated character where it was originally seen.

// max_len is a variable that captures the length of the longest slice containing no repeating characters.  Calculated by subtacting i which
// is the current index of the loop by start and then adding 1 to find the length.

// max start is the index from which the longest slice of str with no repeating characters begins from.

// for loop loops through all the characters of the str variable passed to the longestNonRepeatingSubstring function as the function's sole
// parameter.

// first if statement: if the str[i] is already in last_seen object this means that str[i] is a repeating character and if the index of the
// repeating character is greater than or equal to start (this prevents us from going back on ourselves and analysing a slice for repeats which
// we have already established has a different repeating character).  If this is true then start variable is updated to the most recently found
// index of the character in the last_seen object + 1 so that are new slice starts one index beyond this index.

// last_seen variable is updated.  with the character and it's index within the string.

// current_length variable created.  current length is the current index of the for loop subtracted by the start variable and this sum is added
// by one to find the length of the current slice without non-repeating characters.

// second if statement: if current_len > max_len then the new max_len = current_len and max_start is updated to equal start.

// at the end of the loop return the substring of str which represents the longest slice containing non-repeating characters.  this is achieved
// by using the substring string method with the following arguments. first argument is the index at which the substring is to start from, in this 
// case the max_start variable, and the second argument is found by adding max_start and max_len variables. 