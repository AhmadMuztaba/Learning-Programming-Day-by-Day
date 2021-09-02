/*
Leet code-7
*/
let number = 12222;
let newnumber = '';
const range=Math.pow(2,31);
checknumber=(num)=>{
    if(Math.sign(num)===-1){
        if (num<(range*(-1))) {
            return 0;
        }
        else{
            return num;
        }
    }
    if(Math.sign(num)===1){
        if(num>(range-1)){
            return 0;
        }else{
            return num;
        }
    }else{
        return num;
    }
}
if(checknumber(number)!==0){
    if (Math.sign(number) === -1) {
        number = number.toString();
        newnumber='-';
        for (let i = number.length - 1; i > 0; i--) {
            newnumber = newnumber + number[i];
            console.log(newnumber);
        }
        newnumber = parseInt(newnumber);
        console.log(checknumber(newnumber));
}
else if (Math.sign(number) === 1) {
        number = number.toString();
        for (let i = number.length - 1; i >= 0; i--) {
            newnumber = newnumber + number[i];
        }
        newnumber = parseInt(newnumber);
       console.log(checknumber(newnumber));
}
}else{
    console.log(0);
}


