//Longest Common Prefix
//leetcode-14
const strs= ["a","fl"];
const prefix=(strs)=>{
    let matched="";
    let count=0;
    let first='';
    let notMatch=false;
        let number=strs.length;
        if(strs.length===1){
            matched=strs[0];
        }
        else if(strs.length>1){
            while(!notMatch && count<(strs[0].length)){
                if(strs[0].length<=0){
                    notMatch=true;
                }
                if(strs[0].length>0){
                    first=strs[0][count];
                    for(let i=1;i<number;i++){
                        if(strs[i].length<=0){
                            notMatch=true;
                            break;
                        }
                       else if(strs[i][count]===first && i===(number-1)){
                           matched=matched+strs[i][count];
                        }
                       else if(strs[i][count]!==first){
                           notMatch=true;
                           break;
                       }
                    }
                    count++;
                }
                }   
        }
        if(matched){
            return matched;
        }else{
            return ""
        }
}

console.log(prefix(strs));

