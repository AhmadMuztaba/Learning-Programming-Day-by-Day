const countConstruct=(target,wordbank,count=0,memo={})=>{
    if(target in memo) return memo[target];
    if(target.length===0){
        return 1;
    }
    for(let word of wordbank){
        if(target.indexOf(word)===0){
            count=count+countConstruct(target.slice(word.length),wordbank,count,memo);
            memo[target]=count;
        }
    }
    return count;
}

console.log(countConstruct('abcdef',['ab','abc','cd','def','abcd']));