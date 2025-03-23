function matrix(nums){
    let maxsum=0;
    let sum=0;
    for(let i=0;i<nums.length;i++){
        
        for(let j=0;j<nums[i].length;j++){
            sum+=nums[j][i];
        }
        console.log(sum);
    }
    // if(maxsum<sum)
    //     maxsum=sum;
    // }
   
    
}
let nums=[[3,5,6],[7,8,9],[12,4,5]];
matrix(nums)