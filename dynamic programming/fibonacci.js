let memoize=[];
const fib=(n)=>{
    if(memoize[n]!==undefined){
        return memoize[n];
    }
    if(n===1||n===2){
        return 1;
    }else{
        let result=fib(n-1)+fib(n-2);
        memoize[n]=result;
        return result;
    }
}
console.log(fib(4));