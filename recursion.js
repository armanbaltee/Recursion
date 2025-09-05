// Problem 1
// sum of array num

let arr = [1,2,3,4,5];

// function sumArrayValue(arr){
//     if(arr.length==0){
//         return 0
//     }
//     return arr[0] + sumArrayValue(arr.slice(1));
// }
function sumArrayValue(arr){
    if(arr.length==0){
        return 0
    }
    let firstIndexVal = arr.shift();
    return firstIndexVal + sumArrayValue(arr);
}

let total = sumArrayValue(arr)
console.log("total---->", total)

function strReverse(str){
    if(str.length==0){
        return ''
    }
    return strReverse(str.slice(1)) + str[0]
}

console.log(strReverse("hello") )