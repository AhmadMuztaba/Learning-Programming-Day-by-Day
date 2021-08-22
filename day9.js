const number=[1,3]
const target=2;
let length=number.length;
let found=0;
let newlen=length-1;
let sml=0;
let i=0;
    if(number[i]===target){
        found=i;
    }else if(number[length-1]===target){
           found=length-1;
       }
    else if(number[length-1]<target){
        found=length;
    }
    else if(number[i]>target){
        found=i;
    }
   else if(number[length-1]!==target){
       let devide=Math.round((length-1)/2);
       let j=length-1;
       let len=Math.round(length-1)/2;
       while(1){
           if(len===0 ||j===0 ||j==devide){
               found=(devide);
               break;
           }
           
           else if(number[devide]===target){
               found=devide;
               break;
           }
           else if(number[devide]<target){
               j=j-1;
               if(j===0){
                found=j+1;
                break;
            }else if(j!==0){
                if(number[j]===target){
                    found=j;
                    break;
                }
                else if(number[j]<target){
                    found=j+1;
                    break;
                }
               let temp=devide;
               devide=Math.round((devide+newlen)/2);
               sml=temp;
               len=Math.round(len/2);
            }
           }
           else if(number[devide]>target){
               j=devide-1;
               if(j===0){
                   found=j+1;
                   break;
               }
               if(j!==0){
                 if(number[j]===target){
                    found=j;
                    break;
                    }
                    else if(number[j]<target){
                        found=j+1;
                        break;
                    }
                    let temp=devide;
                    devide=Math.floor((devide+sml)/2);
                    newlen=temp;
                    len=Math.floor(len/2);
               }
           }
       }
   }
  console.log(found);


