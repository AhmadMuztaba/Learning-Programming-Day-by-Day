const canCostruct=(target,wordbank,memo={})=>{
    if(target in memo){
        return memo[target];
    }
    if(target.length===0){
        return true;
    }
    for(let word of wordbank){
        if(target.indexOf(word)===true){
            memo[target]=canCostruct(target.slice(word.length,target.length),wordbank);
        if(memo[target]===true){
            return true;
        }
        }
    }
    return false;
}
console.log(canCostruct('abcdef',['ab','abc','cd','def','abcd']));
console.log(canCostruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',['e','ee',
'eee','eeee','eeeeee','eeeeee','eeeeeef']));