function sub(nums,k){
    for(let i=0;i<=nums.length-k;i++){
        let sum=0;
        for(let j=i;j<k+i;j++){
            process.stdout.write(nums[j].toString()+" ");
            // sum+=nums[j];
        }
        // console.log("Sum="+sum); 
       console.log();
             
    }
}
sub([3,2,1,5,6,4,7,8],5)