// Write a function to find the second largest number in an array.

// Yashwant Kargwal
// Date : 12 / Dec / 2024

// Solution

function secondLargestNum(arr){
    let largest = 0;
    let secondLargest = 0;
    arr.forEach(element =>{
        if(largest <= element){
            secondLargest = largest;
            largest = element;
        }
        else if(secondLargest < element){
            secondLargest = element;
        }
    })
    return secondLargest;
};

let array = [123,15,65]
console.log(secondLargestNum(array)); // Output : 65