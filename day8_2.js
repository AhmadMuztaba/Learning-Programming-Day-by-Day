let num=[3,2,2,3];
const val=2;
let i=0;
while(i<num.length){
    if(num[i]===val){   
            num[i]=null;;
    }else{
        i++;
    }
}
let count=0;
for(i=0;i<num.length;i++){
    if(num[i]!==null){
        num[count]=num[i];
        count++;
    }
}
for(i=count;i<num.length;i++){
    num[i]=undefined;
}

console.log(num);