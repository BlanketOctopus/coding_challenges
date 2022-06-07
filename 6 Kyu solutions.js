// 6 kyu - Create Phone Number
function createPhoneNumber(numbers){
    let format = '(xxx) xxx-xxxx'
    for(let i = 0; i < numbers.length; i++){
      format = format.replace('x', numbers[i])
    }
    return format
}
// 6 kyu - Multiples of 3 or 5
function solution(number){
    let arr = []
    for(let i = 1; i < number; i++){
      if(i % 3 === 0 || i % 5 === 0){
        arr.push(i)
      }
    }
    return arr.reduce((a,b) => a + b, 0)
}
// 6 kyu - Sum of Digits / Digital Root
const digital_root = (n) => n < 10 ? n : digital_root(n.toString().split('').map(e => Number(e)).reduce((a,b) => a + b, 0))
// 6 kyu - Who likes it?
function likes(names) {
  switch(names.length){
       case 0:
         return 'no one likes this'
       case 1:
         return `${names[0]} likes this`
       case 2:
         return `${names[0]} and ${names[1]} like this`
       case 3:
         return `${names[0]}, ${names[1]} and ${names[2]} like this`
       default:
         return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
   }
}
// 6 kyu - Array.diff
function arrayDiff(a, b) {
  return a.filter(e => {
    if(!b.includes(e)){
      return e
    }
  })
}
// 6 kyu - Stop gninnipS My sdroW!
function spinWords(string){
  return string.split(' ').map(e => {
    return e.length < 5 ? e : e.split('').reverse().join('')
  }).join(' ')
}