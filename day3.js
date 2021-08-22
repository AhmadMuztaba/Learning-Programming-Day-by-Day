let number=1000021;
let matched=false;
number=number.toString();
for(i=0,j=number.length-1;i<(number.length/2)+1;j--,i++){
    if(number[i]!==number[j]){
        matched=false;
        break;
    }
    if(number[i]===number[j]){
        matched=true;
    }
}

if(matched===true){
    console.log(true);
}
else{
    console.log(false);
}