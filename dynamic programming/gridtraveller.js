//have to go from top left to right bottom
//count the possible steps number
const grid=(m,n,memo={})=>{
    let key=m+','+n;
   if(key in memo) return memo[key];
    if(m===0||n===0){
        return 0;
    }
    if(m===1 && n===1){
       return 1;
    }
   let result=grid(m-1,n,memo)+grid(m,n-1,memo);
   memo[key]=result;
   return result;
   
}
console.log(grid(100,100));