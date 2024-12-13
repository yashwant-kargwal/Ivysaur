// Create a program to rotate an array by k positions (both left and right).

// Yashwant Kargwal
// Date : 13 / Dec / 2024

// Solution

function rotateLeft(arr, k){
    let length = arr.length;
    k = k % length;
    return arr.slice(k).concat(arr.slice(0, k));
}
function rotateRight(arr,k){
    let length = arr.length;
    k = k % length;
    return arr.slice(length - k).concat(arr.slice(0 ,length - k));
}

let array = [1,2,3,4,5,6,7,8,9,10];
let k = 2;
console.log("The rotaion of Array at",k,"form Left side : ", rotateLeft(array, k));
console.log("The rotaion of Array at",k,"form Right side : ", rotateRight(array, k));

//  Explanation of Key Points:
//      Modulo Operation (k % length):
//      - Ensures that the value of k is within the bounds of the array's length.
//      - If k > length, this reduces unnecessary rotations (e.g., rotating by 12 in a 10-element array is equivalent to rotating by 2).

//      Left Rotation:
//      - arr.slice(k) gives elements from index k to the end.
//      - arr.slice(0, k) gives the first k elements.
//      - Combining these two slices results in the left-rotated array.

//      Right Rotation:
//      - arr.slice(length - k) gives the last k elements.
//      - arr.slice(0, length - k) gives the rest of the elements.
//      - Combining these two slices results in the right-rotated array.
