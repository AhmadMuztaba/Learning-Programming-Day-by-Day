//leet code-88
let num1=[1,2,3];
let m=3
let num2=[1,2];
let n=2;
let c=[];
let g=0;
let h=0;
let k=0;
while(g<m && h<n){
    if(num1[g]<num2[h]){
        c[k]=num1[g];
        g++;
    }else{
        c[k]=num2[h];
        h++;
    }
    k++;
}
while(g<m){
    c[k]=num1[g];
    g++;
    k++;
}
while(h<n){
    c[k]=num2[h];
    h++;
    k++;
}
for(i=0;i<c.length;i++){
    num1[i]=c[i];
}