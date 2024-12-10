// Write a program to find the sum of digits in a given number.

// Yashwant Kargwal
// Date : 10 / Dec / 2024

// Solution

function allDigitSum(number){
    if(number < 0){
        number = Math.abs(number);
    }
    let sum = 0;
    let digits = 0;
    while(number > 0){
        digits = Math.floor(number%10);
        sum += digits;
        number = Math.floor(number/10);
    }
    return `The Sum is ${sum}.`;
}

console.log(allDigitSum(999)); // Output is 27;