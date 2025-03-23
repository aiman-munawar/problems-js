         // Binary Search //
let arr=[1,3,5,7,9,11];

let target=9;
let start=0;
let end=arr.length-1;

function show(arr,item){
    while(start<=end){
    let mid=Math.floor((start+end)/2);
    if(arr[mid]<item){
        start=mid+1;
    }
    else if(arr[mid]>item){
        end=mid-1;
    }
    else if(arr[mid]===item){
        return mid;
    }
}
    return -1;
}

let index=show(arr,target);

if(index===-1){
    console.log(-1);
    
}
else{
    console.log(index);
    
}