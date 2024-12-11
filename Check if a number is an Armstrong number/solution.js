// Check if a number is an Armstrong number

// Q: What is an Armstrong Number?
// A: An Armstrong number for a given number of digits is a number that is equal to the sum of its digits raised to the power of the number of digits.

// Yashwant Kargwal
// Date : 11 / Dec / 2024

// Solution

function checkArmstrong(number){
    number.forEach(numbers => {
        let numStr = numbers.toString();
            
        let powerNumber = numStr.length;
        let sum = 0;

        for(let digit of numStr){
            sum += Math.pow(digit , powerNumber);
        }
        if(sum == numbers){
            console.log(`${numbers} is Armstong Number`);
        }
        else{
            console.log(`${numbers} is not Armstong Number`);
        }
    });

}

let arr = [153,1430];
console.log(checkArmstrong(arr));

// Output : 153 is Armstong Number 
// Output : 1430 is not Armstong Number