//leetcode-53
const nums=[-1,2,-3]
let max=nums[0];
let num=0;
const sum=(k,l,highest,total)=>{
    if(l===nums.length){
        return highest;
    }
    total=total+nums[l];
    if(total>highest){
        highest=total;
    }
    return sum(k,l+1,highest,total);
}

for(let i=0,j=nums.length-1;i<nums.length;i++,j--){
    max=sum(i,nums.length-1-j,max,num);
}
console.log(max);