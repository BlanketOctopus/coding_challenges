// 8 kyu - Filling an array (part 1)
const arr = N => {
  let a = []
  for(let i = 0; i < N; i++){
    a.push(i)
}
  return a
}
// 8 kyu - Filter out the geese
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
  return birds.filter(e => !geese.includes(e))
}
// 8 kyu - Well of Ideas - Easy Version
function well(x){
  let result = x.filter(e => e === 'good').length
  let answer
  if(result < 1){
    answer = 'Fail!'
  }else if(result > 2){
    answer = 'I smell a series!'
  }else{
    answer = 'Publish!'
  }
  return answer
}
// 8 kyu - I love you, a little , a lot, passionately ... not at all
function howMuchILoveYou(nbPetals) {
    let arr = ['I love you','a little','a lot','passionately','madly','not at all']
  return arr[(nbPetals-1) % arr.length]
}
// 8 kyu - Sort and Star
function twoSort(s) {
  let arr = s.sort()
  return arr[0].split('').join('***')
}
// 8 kyu - Removing Elements
function removeEveryOther(arr){
  return arr.filter((_,i) => i % 2 === 0)
}
// 8 kyu - Find numbers which are divisible by given number
function divisibleBy(numbers, divisor){
  return numbers.filter(e => e % divisor == 0)
}
// 8 kyu - My head is at the wrong end!
function fixTheMeerkat(arr) {
 return arr.reverse()
}
// 8 kyu - Sum Mixed Array
function sumMix(x){
  let arr = x.map(Number)
  return arr.reduce((a,b) => a + b)
}
// 8 kyu - Find the first non-consecutive number
function firstNonConsecutive (arr) {
  let temp = null
  let n = null
  let result = arr.forEach(e => {
    if(e !== temp + 1 && temp !== null){
      n = e
    }
    temp = e
  })
   return n
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
// 8 kyu - Grasshopper - Array Mean
var findAverage = function (nums) {
  return nums.reduce((a,b) => a + b) / nums.length
}
// 8 kyu - Find the Difference in Age between Oldest and Youngest Family Members
function differenceInAges(ages){
  let arr = ages.sort((a,b) => a - b)
  return [arr[arr.length-1] - arr[0],arr.pop(),arr.shift()].reverse()
}
// 8 kyu - SpeedCode #2 - Array Madness
function arrayMadness(a, b) {
  return a.map(e => e ** 2).reduce((a,b) => a + b) > b.map(e => e ** 3).reduce((a,b) => a + b) ? true : false
}
// 8 kyu - Basic Training: Add item to an Array
websites.unshift("codewars")
// 8 kyu - Remove First and Last Character Part Two
function array(arr){
  let len = arr.split(',').length - 1
  if(arr.split(',').length < 3){
    return null
    }else{
      return arr.split(',').slice(1,len).join(' ')
  }
}
// 8 kyu - To square(root) or not to square(root)
function squareOrSquareRoot(array) {
  return array.map(e => {
    if(Math.sqrt(e) % 1 === 0){
      return Math.sqrt(e)
    }else{
      return e * e
    }
  })
}
// 8 kyu - Printing Array elements with Comma delimiters
function printArray(array){
  return array.join(',')
}
// 8 kyu - Merge two sorted arrays into one
function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2.filter((i) => arr1.indexOf(i) < 0)).sort((a,b) => a - b)
}
// 8 kyu - Swap Values
function swapValues(args) {
    var temp = args[0];
    args[0] = args[1];
    args[1] = temp;
  return args
}
// 8 kyu - A wolf in sheep's clothing
function warnTheSheep(queue) {
  const wolfIndex = queue.reverse().indexOf('wolf',0)
  if(wolfIndex === 0){
    return "Pls go away and stop eating my sheep"
  }else{
    return `Oi! Sheep number ${wolfIndex}! You are about to be eaten by a wolf!`
  }
}
// 8 kyu - Vowel remover
function shortcut (string) {
  return string.replace(/[aeiou]/g,'')
}
// 8 kyu - Multiplication table for number
function multiTable(number) {
  let table = []
  for(let i = 1; i <= 10; i++){
    table.push(`${i} * ${number} = ${i * number}`)
  }
  return table.join('\n')
}
// 8 kyu - Stringy Strings
function stringy(size) {
  return ''.padStart(size, '10')
}
// 8 kyu - The Feast of Many Beasts
function feast(beast, dish) {
  return beast[0] == dish[0] && beast[beast.length -1] == dish[dish.length -1]
}
// 8 kyu - Do I get a bonus?
function bonusTime(salary, bonus) {
  return bonus == true ? `\u00A3${salary*10}` : `\u00A3${salary}`
}
// 8 kyu - Are You Playing Banjo?
function areYouPlayingBanjo(name) {
  return name[0] == 'r' || name[0] == 'R' ? `${name} plays banjo` : `${name} does not play banjo`
}
// 8 kyu - DNA to RNA Conversion
function DNAtoRNA(dna) {
  return dna.replace(/T/g,'U')
}
// 8 kyu - Reversed Words
function reverseWords(str){
  return str.split(' ').reverse().join(' ')
}
// 8 kyu - Convert a Boolean to a String
function booleanToString(b){
  return b.toString()
}
// 8 kyu - Convert a String to a Number!
var stringToNumber = function(str){
  return Number(str)
}
// 8 kyu - Welcome to the City
function sayHello( name, city, state ) {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}
// 8 kyu - Reversing Words in a String
function reverse(string){
  return string.split(' ').reverse().join(' ').trim()
}
// 8 kyu - Name Shuffler
function nameShuffler(str){
  return str.split(' ').reverse().join(' ')
}
// 8 kyu - L1: Bartender, drinks!
function getDrinkByProfession(param){
  switch(param.toLowerCase()){
      case "jabroni":
        return "Patron Tequila"
      case "school counselor":
        return "Anything with Alcohol"
      case "programmer":
        return "Hipster Craft Beer"
      case "bike gang member":
        return "Moonshine"
      case "politician":
        return "Your tax dollars"
      case "rapper":
        return  "Cristal"
      default:
        return  "Beer"
  }
}
// 8 kyu - Simple validation of a username with regex
function validateUsr(username) {
  return /^[a-z0-9_]{4,16}$/.test(username) 
}
// 8 kyu - Alan Partridge II - Apple Turnover
function apple(x){
  return x ** 2 > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.'
}
// 8 kyu - Palindrome Strings
function isPalindrome(line) {
  return line.toString().split('').reverse().join('') == line
}
// 8 kyu - Dollars and Cents
function formatMoney(amount){
  return '$' + parseFloat(amount).toFixed(2)
}
// 8 kyu - The Wide-Mouthed frog!
function mouthSize(animal) {
  if(animal.toLowerCase() == 'alligator'){
    return 'small'
  }else{
    return 'wide'
  }
}
// 8 kyu - Capitalization and Mutability
function capitalizeWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}
// 8 kyu - Holiday VI - Shark Pontoon
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  if(dolphin){
    sharkSpeed /= 2
  }
  return pontoonDistance/youSpeed < sharkDistance/sharkSpeed ? "Alive!" : "Shark Bait!"
}
// 8 kyu - Who is going to pay for the wall?
function whoIsPaying(name){
  return name.length > 2 ? [name, name[0] + name[1]] : [name] 
}
// 8 kyu - Is there a vowel in there?
function isVow(a){
  for (let i = 0; i < a.length; ++i){
    let char = String.fromCharCode(a[i])
    if ('aeiou'.indexOf(char) !== -1)
    a[i] = char
  }
  return a
}
// 8 kyu - validate code with simple regex
function validateCode (code) {
  return /^[1-3]/.test(code);
}
// 8 kyu - Remove the time
function shortenToDate(longDate) {
  let shortDate = longDate.split(',')
  return shortDate[0]
}
// 8 kyu - No Loops 2 - You only need one
function check(a,x){
  return a.includes(x)
};
// 8 kyu - String cleaning
function stringClean(s){
  return s.replace(/[0-9]/g,'')
}
// 8 kyu - A Strange Trip to the Market
function isLockNessMonster(s) {
  return s.includes('tree fiddy') || s.includes(3.50) || s.includes('three fifty') ? true : false
}
// 8 kyu - repeatIt
const repeatIt = (str,n) => typeof str == 'string' ? str.repeat(n) : 'Not a string'
// 8 kyu - String Templates - Bug Fixing #5
function buildString(...template){
  return `I like ${template.join(', ')}!`;
}
// 8 kyu - UEFA EURO 2016
function uefaEuro2016(teams, scores){
  if(scores[0] === scores[1]){
    return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
  }else{
  return scores[0] > scores[1] ? `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!` : `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
}}
// 8 kyu - Polish alphabet
function correctPolishLetters(string){
  let diacritics = {
    'ą':'a',
    'ć':'c',
    'ę':'e',
    'ł':'l',
    'ń':'n',
    'ó':'o',
    'ś':'s',
    'ź':'z',
    'ż':'z'
  }
  return string.replace(/[ąćęłńóśźż]/g, e => diacritics[e])
}
// 8 kyu - Take an Arrow to the knee, Functionally
var ArrowFunc = function(arr) {
  return arr.map(e => e = String.fromCharCode(e)).join('')
}
// 8 kyu - Character Frequency
function charFreq(message) {
  return message.split('').reduce((a, b) => {
    return (a[b] = (a[b] || 0) + 1) && a;
  }, {});
}
// 8 kyu - Get number from string
function getNumberFromString(s) {
  return parseInt(s.replace(/\D/g, ''))
}
// 8 kyu - ES6 string addition
function joinStrings(string1, string2){
   return `${string1} ${string2}`
}
// 8 kyu - Simple Comparison?
function add(a, b){
  return a == b
}
// 8 kyu - Contamination #1 -String-
function contamination(text, char){
  return text.replace(/./g, char)
}
// 8 kyu - Crash Override
function aliasGen(fName, lName) {
  return /^[a-z]/i.test(fName) && /^[a-z]/i.test(lName) ? `${firstName[fName[0].toUpperCase()]} ${surname[lName[0].toUpperCase()]}` : "Your name must start with a letter from A - Z.";  
}
// 8 kyu - Simple Change Machine
function changeMe(moneyIn){
  switch (moneyIn){
    case '£5':
      return '20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p'
    case '£2':
      return '20p 20p 20p 20p 20p 20p 20p 20p 20p 20p'
    case '£1':
      return '20p 20p 20p 20p 20p'
    case '50p':
      return '20p 20p 10p'
    case '20p':
      return '10p 10p'
    default:
      return moneyIn
}}
// 8 kyu - Add Length
function addLength(str) {
  return str.split(' ').map(e => e = `${e} ${e.length}`)
}
// 8 kyu - Is he gonna survive?
function hero(bullets, dragons){
  return bullets / 2 >= dragons
}
// 8 kyu - Switch/Case - Bug Fixing #6
function evalObject(value){
  switch(value.operation){
    case'+': return value.a + value.b;
    case'-': return value.a - value.b;
    case'/': return value.a / value.b;
    case'*': return value.a * value.b;
    case'%': return value.a % value.b;
    case'^': return Math.pow(value.a, value.b);
  }
}
// 8 kyu - Leonardo Dicaprio and Oscars
function leo(oscar){
  if(oscar === 88){
    return "Leo finally won the oscar! Leo is happy"
  }else if(oscar === 86){
    return "Not even for Wolf of wallstreet?!"
  }else if(oscar < 88){
    return "When will you give Leo an Oscar?"
  }else{
    return "Leo got one already!"
  }
}
// 8 kyu - Fuel Calculator
function fuelPrice(litres, pricePerLitre) {
  if(litres >= 10){
    return Math.round(litres * (pricePerLitre - 0.25) * 100) / 100
  }else if(litres >= 8){
    return Math.round(litres * (pricePerLitre - 0.2) * 100) / 100
  }else if(litres >= 6){
    return Math.round(litres * (pricePerLitre - 0.15) * 100) / 100
  }else if(litres >= 4){
    return Math.round(litres * (pricePerLitre - 0.1) * 100) / 100
  }else if(litres >= 2){
    return Math.round(litres * (pricePerLitre - 0.05) * 100) / 100
  }else{
    return Math.round(litres * pricePerLitre * 100) / 100
  }
}
// 8 kyu - Plural
function plural(n) {
  return n !== 1 
}
// 8 kyu - Jenny's secret message
function greet(name){
  if(name === "Johnny"){
    return "Hello, my love!";
  }else{
      return `Hello, ${name}!`;
  }
}
// 8 kyu - Grasshopper - Personalized Message
function greet (name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest'
}
// 8 kyu - Drink about
function peopleWithAgeDrink(old) {
  if(old < 14){
    return 'drink toddy'
  }else if(old < 18){
    return 'drink coke'
  }else if(old < 21){
    return 'drink beer'
  }else{
    return 'drink whisky'
  }
}
// 8 kyu - Chuck Norris VII - True or False? (Beginner)
function ifChuckSaysSo(a){
  return a !== a
}
// 8 kyu - L1: Set Alarm
function setAlarm(employed, vacation){
  return employed == true && vacation == false
}
// 8 kyu - BASIC: Making Six Toast.
function sixToast(num) {
  return num === 6 ? 0 : num > 6 ? num - 6 : 6 - num
}
// 8 kyu - Double Char
function doubleChar(str) {
  return str.split('').map(e => e += e).join('')
}
// 8 kyu - Do you speak "English"?
function spEng(sentence){
  return sentence.toLowerCase().includes('english')
}
// 8 kyu - Define a card suit
function defineSuit(card) {
  return card.includes('♣') ? 'clubs' : card.includes('♦') ? 'diamonds' : card.includes('♥') ? 'hearts' : 'spades'
}
// 8 kyu - Can we divide it?
function isDivideBy(number, a, b) {
  return number % a === 0 && number % b === 0
}
// 8 kyu - Multiple of index
function multipleOfIndex(array) {
  return array.filter((e,i) => e % i === 0)
}
// 8 kyu - Is n divisible by x and y?
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0 
}
// 8 kyu - Find Maximum and Minimum Values of a List
var min = function(list){
    return Math.min(...list)
}

var max = function(list){
    return Math.max(...list)
}
// 8 kyu - Reversed sequence
const reverseSeq = n => {
  let arr = []
  for(let i = n; i > 0; i--){
    arr.push(i)
  }
  return arr
}
// 8 kyu - MakeUpperCase
function makeUpperCase(str) {
  return str.toUpperCase()
}
// 8 kyu - Twice as old
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return dadYearsOld >= sonYearsOld * 2 ? dadYearsOld - sonYearsOld * 2 : sonYearsOld * 2 - dadYearsOld   
}
