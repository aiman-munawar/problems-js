            // Decending order of arrangement of array by slection sort //
function selectionSort(nums){
     for(let i=nums.length-1 ;i>=0;i--){
          minIndex=i;
          for(let j=i-1;j>=0;j--){
            if(nums[j]<nums[minIndex]){
                minIndex=j;
            }
          }
          let temp=nums[i];
          nums[i]=nums[minIndex]
          nums[minIndex]=temp;
     }
     return nums;
}
let nums=[1,2,4,5,6,7]
let index=selectionSort(nums);
console.log(index);
