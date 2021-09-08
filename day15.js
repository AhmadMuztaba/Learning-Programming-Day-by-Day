//Leet code-67
let maxLength=Math.max(a.length,b.length);
let minLength=Math.min(a.length,b.length);
let revanswer=[];
let answer='';
let isRemainder=false;
for(let i=a.length-1,l=b.length-1,j=0;j<maxLength || isRemainder==true;i--,j++,l--){
    let number=[];
    if(a[i]){
        number.push(a[i]);
    }
    if(b[l]){
        number.push(b[l]);
    }
    if(isRemainder){
        number.push('1');
        isRemainder=false;
    }
    p=0;
    let sum='0';
    let g=number.length;
    while(p<g){
        if(number[p]=='0' && sum=='0'){
            sum='0';
            p++;
        }else if(number[p]=='1' && sum=='0'){
            sum='1';
            p++;
        }
        else if(number[p]=='0' && sum=='1'){
            sum='1';
            p++;
        }
        else if(number[p]=='1' && sum=='1'){
            sum='0';
            isRemainder=true;
            p++;
        }
    }
    revanswer[j]=sum;
}
for(let i=revanswer.length-1;i>=0;i--){
    answer+=revanswer[i];
}
console.log(answer);

