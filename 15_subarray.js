function subarray(nums){
    let max=0;
    for(let i=0;i<nums.length;i++){
        let sum=0;
        for(let j=0;j<nums.length-i;j++){
            process.stdout.write(nums[j].toString()+" ");
            sum+=nums[j];
        }
        process.stdout.write("The sum="+sum.toString())
        if(sum>max){
            max=sum;
        }
        console.log();    
    }
    console.log('MAX SUM='+max);
    
}
subarray([1,5,-7,2,7,-8,1,9])

