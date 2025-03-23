// function digonalSum(mat){
//     let sum=0;
//     for(let i=0;i<mat.length;i++){
//         for(let j=0;j<mat[0].length;j++){
//             if(i===j){
//                 sum+=mat[i][j];
//             } else if(i+j===mat.length-1){
//                 if(i!==j){
//                     sum+=mat[i][j]
//                 }
//             }
//         }
//     }
//     return sum;
// }



// let mat=[
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16]
// ]

// let sum=digonalSum(mat)
// console.log(sum);
 
//   or use this method
function diagonal(nums){
    let sum=0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i][i]
        if(i!==nums.length-1-i){
        sum+=nums[i][nums.length-1-i]
        }
    }
    return sum
}

let nums=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let index=diagonal(nums)
console.log(index);

