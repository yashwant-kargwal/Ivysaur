let arr = [1,2,3,4,5,6,7,8,9,10] //input array

// Resverse Array function
function reverseArray(arg){
    //build new array to store reverse value
    let newArr = [];
    // for-of loop for each element of array
    for(let i of arg){
        // unshift method for add number in starting of array
        // index start form 0 so minus 1 from i
        newArr.unshift(arr[i - 1]);
    }
    // return the stored value of newArr( reverse array) - [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    return newArr;
}

// print and call the reverse array function
console.log(reverseArray(arr));