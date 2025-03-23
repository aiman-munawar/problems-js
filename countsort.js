function CountSort(nums){
    let max=0;
    let CountArr=[];
    for(let i=0;i<nums.length;i++){
        max=Math.max(max,nums[i]);
    }
    CountArr=new Array(max+1).fill(0);
    for(let j=0;j<nums.length;j++){
        CountArr[nums[j]]++
    }
    let k=0;
    for(let l=0;l<CountArr.length;l++){
        while(CountArr[l]>0){
            nums[k]=l;
            k++;
             CountArr[l]--;
        }
    
    }
    console.log(nums);
}
let nums=[3,5,3,2,8,9,1,5,6,7];
//  [0,1,1,2,0,2,1,1,1,1]
// [1,2,3,3,5,5,6,7,8,9]
CountSort(nums);