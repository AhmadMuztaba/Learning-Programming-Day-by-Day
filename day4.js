/*
Name:Roman Integer
*/
const roman="IX";
let sum=0;
let prev,now,temp;
for(let i=roman.length-1;i>=0;i--){
    now=roman[i];
    let ran=false;
    if(i>0){
        prev=roman[i-1];
         if(prev==='C' && now==='M'){
            sum=sum+900;
            ran=true;
            temp=prev;
         }
         else if(prev==='C' && now==='D'){
            sum=sum+400;
            ran=true;
            temp=prev;
         }
        else if(prev==='X' && now==='M'){
            sum=sum+990;
            ran=true;
            temp=prev;
         }
         else if(prev==='X' && now==='L'){
            sum=sum+40;
            ran=true;
            temp=prev;
         }
         else if(prev==='X' && now==='C'){
            sum=sum+90;
            ran=true;
            temp=prev;
         }
         else if(prev==='I' && now==='V'){
            sum=sum+4;
            ran=true;
            temp=prev;
        }
       else if(prev==='I' && now==='X'){
        sum=sum+9;
        ran=true;
        temp=prev;
    }
    }
    if(!ran){
        if(roman[i]==='M'){
            sum=sum+1000;
        }
        else if(roman[i]==='D'){
            sum=sum+500;
        }
        else if(roman[i]==='C' &now!==temp){
            temp=undefined;
            sum=sum+100;
        }
        else if(roman[i]==='L'){
            sum=sum+50;
        }
        else if(roman[i]==='X' & now!==temp){
            temp=undefined;
            sum=sum+10;
        }
        else if(roman[i]==='V'){
            sum=sum+5;
        }
        else if(roman[i]==='I' &now!==temp){
            temp=undefined;
            sum=sum+1;
        }
    }
    
}
console.log(sum);