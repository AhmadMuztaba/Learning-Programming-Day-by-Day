const allConstruct=(target,wordbank,memo={})=>{
    if(target in memo) return memo[target];
    if(target.length===0){
        return [[]];
    }
    let allwords=[]
    for(let word of wordbank){
        if(target.indexOf(word)===0){
            let suffix=allConstruct(target.slice(word.length),wordbank);
            let targetways=suffix.map(way=>[word,...way]);
            allwords.push(...targetways);
        }
    }
    memo[target]=allwords;
    return allwords;
}

console.log(allConstruct('abcdef',['ab','abc','cd','def','abcd']));
