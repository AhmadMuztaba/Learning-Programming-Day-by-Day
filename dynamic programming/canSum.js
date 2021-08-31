//
const canSum=(target,array,memoize={})=>{
    if(target in memoize){
        return memoize[target];
    }
    if(target<0){
        return false;
    }
   if(target===0){
       return true;
   }
   for(let number of array){
       let remainder=target-number;
       memoize[target]=canSum(remainder,array,memoize)
       if(memoize[target]===true){
           return true;
       };
       return false;
   }
}
console.log(canSum(300,[7,14]));