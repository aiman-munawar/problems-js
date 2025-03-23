function binarysearch(nums,target){
    for(let i=0;i<nums.length;i++){
        let left=0;
        let right=nums[i].length-1;
        
        while(left<=right){
            let mid=Math.floor((left+right)/2);
            if(nums[i][mid]<target){
                left=mid+1;
            }
            else if(nums[i][mid]>target){
                right=mid-1
            }
            else if(nums[i][mid]===target){
                console.log( [i,mid]);
                return;
                 
            }

        }
    }
        console.log(false);
}

let nums=[[3,4,5],[6,7,8],[9,10,11]];
binarysearch(nums,10);

