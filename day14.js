//leet code43
//wrong answer-->number can carry only (2^52)-1 numbers.will have to find a better way.maybe with string
let num1="123456789";
let num2="987654321";
let newnum1=[];
let newnum2=[];
var answer=0;
let count=0;
for(let i=0;i<num1.length;i++){
    newnum1[count]=parseInt(num1[i]);
    count=count+1;
}
count=0;
for(let i=0;i<num2.length;i++){
    newnum2[count]=parseInt(num2[i]);
    count=count+1;
}
for(i=newnum2.length-1,k=0;i>=0;i--,k++){
    for(j=newnum1.length-1,m=0;j>=0;j--,m++){
        let newAns=newnum2[i]*Math.pow(10,k)*newnum1[j]*Math.pow(10,m);
        answer=answer+newAns
    }
}
console.log(answer.toString());


