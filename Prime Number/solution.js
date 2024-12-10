// Create a function to check if a number is prime.

// Yashwant Kargwal
// Date : 10 / Dec / 2024

// Solution

function isPrime(number){
    if(number <= 1){
        return `${number} is not a Prime Number`;
    }
    for(let i = 2; i <= Math.sqrt(number); i++){
        if(number%i == 0){
            return `${number} is not a Prime Number`;
        }
    }
    return `${number} is Prime Number`;
}

console.log(isPrime(7)) // Prime;
console.log(isPrime(15)) // Not Prime;
console.log(isPrime(99)) // Not Prime;
console.log(isPrime(97)) // Prime;