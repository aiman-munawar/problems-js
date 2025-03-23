// let factorial=1;
// for(let i=5;i>0;i--){
//         factorial=factorial*i;
// }
// console.log(factorial);

function factorial(i,num=1){
    if(i<=0){
        return num;
    }
    return factorial(i-1,num=num*i);

}
let number=factorial(5);
console.log(number);

