
// 7 kyu - Round up to the next multiple of 5
function roundToNext5(n){
    return Math.ceil(n/5)*5;
}
// 7 kyu - Find the capitals
var capitals = function (word) {
  let arr = []
  word.split('')
      .forEach((e, i) => {
    if(e === e.toUpperCase()){
      arr.push(i)
    }
  })
  return arr.sort()
};
// 7 kyu - Remove anchor from URL
function removeUrlAnchor(url){
  return url.split('#')[0];
}
// 7 kyu - Sum of a sequence
const sequenceSum = (begin, end, step) => {
  let result = 0
  if(end >= begin){
    for(let i = begin; i <= end; i += step){
      result += i
    }
  }
  return result
};
// 7 kyu - Beginner Series #3 Sum of Numbers
function getSum( a, b )
{
let result = 0;
    if (a === b) { 
      return a;
    } else if (a > b) {
      for (let i = b; i <= a; i++)
      result += i;
    } else {
      for (let i = a; i <= b; i++)
      result += i; 
    }
  
  return result;
}
// 7 kyu - Exes and Ohs
function XO(str) {
  let noX = 0
  let noO = 0
  str.split('')
        .forEach(e => {
      if(e.toLowerCase() === 'x'){
        noX++
      }else if(e.toLowerCase() === 'o'){
        noO++
      }
    })
  return noX === noO ? true : false
}
// 7 kyu - List Filtering
function filter_list(l) {
  return l.filter(e => Number.isInteger(e));
}
// 7 kyu - Descending Order
function descendingOrder(n) {
  return parseInt(n.toString().split("").sort().reverse().join(""));
}
// 7 kyu - You're a square!
var isSquare = function(n){
  return Math.sqrt(n)%1===0
}
// 7 kyu - Square Every Digit
function squareDigits(num){
  let result = ''
  num.toString()
      .split('')
      .forEach(e => result += e ** 2)   
    return Number(result)
}
// 7 kyu - Vowel Count
function getCount(str) {
  var vowelsCount = 0;
  
  // enter your majic here
  str.split('').forEach(e => {
    if(e === 'a' || e === 'e' || e === 'i' || e === 'o' || e ==='u'){
        vowelsCount++
        }
  })
  return vowelsCount;
}
