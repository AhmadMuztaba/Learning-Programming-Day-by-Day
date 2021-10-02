//leet code->70
const climbingStairs=(n,mem={})=>{
    if(n in mem) return mem[n];
    if(n==0 ||n==1){
        return 1;
    }
    mem[n]=climbingStairs(n-1,mem)+climbingStairs(n-2,mem);
    return mem[n];
}
console.log(climbingStairs(4));