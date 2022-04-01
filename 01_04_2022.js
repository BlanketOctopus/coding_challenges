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
// 8 kyu - Even or Odd
function even_or_odd(number) {
  if (number % 2 === 0)
    return "Even"
  else
    return "Odd"
}
// 8 kyu - Opposite number
function opposite(number) {
  return(-number);
}
// 8 kyu - Convert a Number to a String!
function numberToString(num) {
  return num.toString();
}
// 8 kyu - Convert boolean values to strings 'Yes' or 'No'.
function boolToWord( bool ){
  return bool ? 'Yes':'No';
}
// 8 kyu - Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return fuelLeft * mpg >= distanceToPump ? true : false;
};
// 8 kyu - Beginner Series #1 School Paperwork
function paperwork(n, m) {
  if(n<0 || m<0){
    return 0;
  }
  else{
    return n * m;
  }
}
// 8 kyu - Get the mean of an array
function getAverage(marks){
  let length = marks.length
  let sum = marks.reduce((a,b) => a+b,0)
  let result = sum / length
  return Math.floor(result)
}
// 8 kyu - Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
  if(input == null || input == 0){return []}
  
  let p = 0
  let n = 0
  
  let arr = input.map((e,i) => {
      if (e > 0){
        p += 1
      }else{
        n += e
      }
    })
  return [p,n]
}
// 8 kyu - You Can't Code Under Pressure #1
function doubleInteger(i) {
  return i * 2;
}
// 8 kyu - A Needle in the Haystack
function findNeedle(haystack) {
  let position = haystack.indexOf('needle')
  return `found the needle at position ${position}`
}
// 8 kyu - Abbreviate a Two Word Name
function abbrevName(name){
  return name.split(' ').map(e => e = e.slice(0,1).toUpperCase()).join('.')
}
// 8 kyu - Returning Strings
function greet(name){
  return `Hello, ${name} how are you doing today?`;
}
// 8 kyu - Keep Hydrated!
function litres(time) {
  return Math.floor(time * 0.5);
}
// 8 kyu - Function 1 - hello world
function greet() {
  return "hello world!";
}
// 8 kyu - Counting sheep...
function countSheeps(arrayOfSheep) {
  let result=0
  
 arrayOfSheep.forEach((e)=>{if(e) result++})
  return result
}
// 8 kyu - Remove String Spaces
function noSpace(x){return x.split(' ').join('')}
// 8 kyu - Grasshopper - Summation
var summation = function (num) {
let result = 0
for (i = 1; i <= num; i++) {
result += i

}
return result
}
// 8 kyu - Find the smallest integer in the array
class SmallestIntegerFinder {
  findSmallestInt(args) {
    args.sort((a, b) => a - b);
    return args[0];
  }
}
// 8 kyu - String repeat
function repeatStr (n, s) {
  let string = ''
  for(let i = 0; i < n; i++) {
    string += s
  }
  return string;
}
// 8 kyu - Return Negative
function makeNegative(num) {
  return num < 0 ? num : num * -1;
}
// 8 kyu - Sum of positive
function positiveSum(arr) {
  let arr2 = []
  arr.forEach(e => {
    if(e > 0){
      arr2.unshift(e)
    }
  }) 
  return arr2.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
}
// 8 kyu - Reversed Strings
function solution(str){
  return str.split('').reverse().join('');  
}
