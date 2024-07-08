// Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher (check Resources tab for more info) shifts each 
// letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a 
// rotation by 3, w, x, y and z would map to z, a, b and c.

// Create a function that takes a string s (text to be encrypted) and an integer k (the rotation factor). It should return an encrypted string.
// Examples

// caesarCipher("middle-Outz", 2) ➞ "okffng-Qwvb"

// // m -> o
// // i -> k
// // d -> f
// // d -> f
// // l -> n
// // e -> g
// // -    -
// // O -> Q
// // u -> w
// // t -> v
// // z -> b

// caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5)
// ➞ "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"

// caesarCipher("A friend in need is a friend indeed", 20)
// ➞ "U zlcyhx ch hyyx cm u zlcyhx chxyyx"

function caesarCipher(s, k) {
    let alph = "abcdefghijklmnopqrstuvwxyz";

    return [...s].reduce((acc,i) => i.match(/[a-z]/i) ?
        i.match(/[a-z]/) ? acc + alph[(alph.indexOf(i) + k) % 26] : 
        acc + alph[(alph.indexOf(i.toLowerCase()) + k) % 26].toUpperCase() : acc + i,"");
}

console.log(caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5));
// ➞ "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"

console.log(caesarCipher("A friend in need is a friend indeed", 20));
// ➞ "U zlcyhx ch hyyx cm u zlcyhx c   hxyyx"

// function caesarCipher(s, k) {
//     return s.replace(/[a-z]/gi, m => {
//       const c = m < "a" ? 65 : 97;
//       return String.fromCharCode((m.charCodeAt(0) - c + k) % 26 + c)
//     });
//   }

// const caesarCipher = (s,k) => s.replace(/[a-z]/gi, c => {
//     let o = c < "a" ? 65 : 97; 
//     return String.fromCharCode( (c.charCodeAt()+k-o)%26 + o )
// } ); 