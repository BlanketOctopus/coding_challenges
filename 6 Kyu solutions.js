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