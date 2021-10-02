//leet code-509
const fib=(n,mem={})=>{
    if(n in mem) return mem[n];
    if(n==0)return 0;
    if(n==1 ||n==2) return 1;
    mem[n]=fib(n-1)+fib(n-2);
    return mem[n];
}
console.log(fib(4));