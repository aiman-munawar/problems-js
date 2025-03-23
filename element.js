       // Find the third largest element in array by using bubble Sort //

function bubblesort(nums){
    for(let i=0 ; i<k ;i++){
        for(let j=0;j<nums.length;j++){
            if(nums[j]>nums[j+1]){
                let temp=nums[j];
                nums[j]=nums[j+1];
                nums[j+1]=temp;
            }
        }
    }
    return nums[nums.length-k]
}

let nums=[6,7,8,9,1,2];
let k=3;
let index=bubblesort(nums,k);
console.log(index);
