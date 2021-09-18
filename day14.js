//leet code43
//wrong answer
let num1="401716832807512840963"
let num2="167141802233061013023557397451289113296441069"

console.log(BigInt(num1)*BigInt(num2));
let newnum1=[];
let newnum2=[];
var answer=0n;
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
        let aa=(Math.pow(10,k));
        let bb=(Math.pow(10,m));
        let a=BigInt((newnum2[i])*aa);
        let b=BigInt((newnum1[j])*bb);
        newAns=BigInt(a*b);
        answer=BigInt(BigInt(answer)+BigInt(newAns));
    }
}
console.log(answer.toString());




