        // Bubble Sort //
function bubblesort(nums){
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(nums[j+1]<nums[j]){
                let temp=nums[j];
                nums[j]=nums[j+1];
                nums[j+1]=temp;
            }
        }
    }
    return nums;
}

let nums=[2,6,7,8,2,1,9];
let index=bubblesort(nums);
console.log(index);


