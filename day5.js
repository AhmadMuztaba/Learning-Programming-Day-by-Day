//Valid parenthesis
const s="({})";
let newarray=[];
let change=false;
for(let i=0;i<s.length;i++){
    if(s[i]==='('){
        change=true;
        newarray.push('first');
    }
    else if(s[i]==='{'){
        change=true;
        newarray.push('second');
    }
    else if(s[i]==='['){
        change=true;
        newarray.push('third');
    }else{
        let e='';
        if(newarray.length===0){
            change=false;
            break;
        }
        if(s[i]===')'){
            e='first';
        }
        else if(s[i]==='}'){
            e='second';
        }
       else if(s[i]===']'){
            e='third';
        }
        if(e===newarray[newarray.length-1]){
            newarray.pop();
        }else{
            change=false;
            break;
        }
    }
}
if(newarray.length>0 ||change===false){
    console.log(false);
}
else if(newarray.length===0 && change===true){
    console.log(true);
}