// 8 kyu - Beginner - Lost Without a Map
function maps(x){
  return x.map(n => n * 2);
}
// 8 kyu - Fake Binary
function fakeBin(x){
  return x.split('').map(e => e < 5 ? 0 : 1).join('')
}
// 8 kyu - You only need one - Beginner
function check(a, x) {
  return a.includes(x,0) ? true : false
}
// 8 kyu - Sum Arrays
function sum (numbers) {
    "use strict";
    return numbers.length > 0 ? numbers.reduce((a,b) => a + b) : 0
};
// 8 kyu - Array plus array
function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((a,b) => a + b) + arr2.reduce((a,b) => a + b)
}
// 8 kyu - Count the Monkeys!
function monkeyCount(n) {
  let arr = []
  for(let i = 1; i <= n; i++){
    arr.push(i)  
  }
  return arr
}
// 8 kyu - Beginner - Reduce but Grow
function grow(x){
  return x.reduce((a,b) => a * b)
}
// 8 kyu - Sentence Smash
function smash (words) {
   return words.join(' ')
};
// 8 kyu - Convert a string to an array
function stringToArray(string){
  return string.split(' ')
}
// 8 kyu - Count by X
function countBy(x, n) {
  let z = [];
  for(let i = x; i <= n * x; i += x){
    z.push(i)
  }
  return z;
}
