//how to get the target 
//one answer is okay
const howSum=(target,numbers,memoize={})=>{
    if(target in memoize) return memoize[target];
    if(target===0)return [];
    if(target<0)return null;
    for(let num of numbers){
       const remainder=target-num;
       const arr=howSum(remainder,numbers,memoize);
       if(arr!==null){
           memoize[target]=[...arr,num]
           return memoize[target];
       }
   }
   memoize[target]=null;
   return null;
}
console.log(howSum(300,[7,14]));