//leet code-26
const num=[1,2,2,2,3,3,4,4,5,6,6,6];
let prev;
let length=num.length;
let i=0;
while(i<length){
    if(num[i]==undefined){
        i++;
    }
    if(num[i]===prev){
        num.splice(i,1);
    i=i;
    }else if(num[i]!==prev){
        prev=num[i];
        i++;
    }
}
let count=0;
for(i=0;i<num.length;i++){
    if(num[i]!==undefined){
        count++;
    }
}
console.log(num);