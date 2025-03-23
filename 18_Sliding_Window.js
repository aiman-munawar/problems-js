                // Sliding Window //
function window(nums,k){
    let sum=0;
    for(let i=0;i<k;i++){
        sum+=nums[i];
    }
    let max=sum;
    for(let j=k;j<nums.length;j++){
        sum+=nums[j];
        sum-=nums[j-k];
    
        
        if(sum>max){
            max=sum;
        }
    }
    return max;
   
}

let res=window([3,2,1,5,6,4,7],5)

console.log(res);
