// Implement a function to reverse the digits of a number (e.g., 12345 becomes 54321).


// Yashwant Kargwal
// Date : 11 / Dec / 2024

// Solution

function reverseNumber(number){
    if(number < 0){
        number = Math.abs(number);
    }
    let digits = "";
    while(number > 0){
        digits += Math.floor(number%10);
        number = Math.floor(number/10);
    }
    return `The reverse digits is ${digits}.`;
}

console.log(reverseNumber(12345)); // Output is 54321