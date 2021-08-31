const bestSum=(totalsum,numbers,memo={})=>{
    if(totalsum in memo) return memo[totalsum];
    if(totalsum===0){
        return [];
    }
    if(totalsum<1){
        return null;
    }
    let shortest=null;
    for(let num of numbers){
        let remainder=totalsum-num;
        const array=bestSum(remainder,numbers,memo);
        if(array!==null){
          let ar=[...array,num];
          if(shortest===null||shortest.length>ar.length){
              shortest=ar;
          }
        }
    }
    memo[totalsum]=shortest;
    return memo[totalsum];
}
console.log(bestSum(100,[1,2,5,25]));
