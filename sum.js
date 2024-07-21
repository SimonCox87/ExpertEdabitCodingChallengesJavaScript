// Write a function that takes an array of strings of arbitrary dimensionality ([], [][], [][][], etc.) and returns the sum of every separate number in 
// each string in the array.

// Examples

// sum(["1", "five", "2wenty", "thr33"]) ➞ 36

// sum([["1X2", "t3n"],["1024", "5", "64"]]) ➞ 1099

// sum([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"-1s0"]]) ➞ 759

// Notes

//     Numbers in strings can be negative, but will all be base-10 integers.
//     Negative numbers may directly follow another number.
//     The hyphen or minus character ("-") does not only occur in numbers.
//     Arrays may be ragged or empty.

function sum(arr) {
    return arr.flat(Infinity)
    .flatMap((i) => i.match((/-?\d+/g)))
    .reduce((a,i) => a + +i,0);    
}

console.log(sum(["1", "five", "2wenty", "thr33"])) // ➞ 36

console.log(sum([["1X2", "t3n"],["1024", "5", "64"]])) // ➞ 1099

console.log(sum([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"-1s0"]])) // ➞ 759

// let [actualParam, expectedParam] = [
//     [
//       ["1", "five", "2wenty-one", "thr33"],
//       [["1X2", "t3n"],["1024", "5", "64"]],
//       [[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"-1s0"]],
//       [[["0", "0x2", "z3r1"],["1", "55a46"]],[["1", "0b2", "4"],["0x5fp-2", "nine", "09"],["4", "4", "4"]],[["03"]], []],
//       [[[[[[[[[[[[[[[["-1", "1"], ["3"], [""], []]]]]]]]]]]]]]]],
//       [[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]],
//       [[[[[["-32-64", "a-zA-Z"], ["01-1"]]]]]]
//     ],
//     [36, 1099, 759, 142, 3, 0, -96]
//   ]

// for (let i = 0; i < actualParam.length; i++) {
//    console.log(sum(actualParam[i]) == expectedParam[i]);
// }

// function sum(arr) {
// 	let nums = String(arr).match(/-?\d+/g)
// 	return nums ? nums.reduce((a, b) => a + +b, 0) : 0;
// }

// const sum = r => {
//     r = JSON.stringify(r).match(/-?\d+/g)||[]
//     return r.reduce((s, e) => s + +e, 0)
//   }
