//58
let count=0;
let s="Hello World";
s=s.trim();
for(i=s.length-1;i>=0;i--){
    if(s[i]===' '){
        break;
    }
    count++;
}
console.log(count);