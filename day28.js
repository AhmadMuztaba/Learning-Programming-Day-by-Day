//leet code->448
let nums = [1,1];
let map=new Map();
let length=nums.length;
for(let i=0;i<nums.length;i++){
    map.set(nums[i],nums[i]);
}
nums=[];
for(let i=0;i<length;i++){
    if(!map.has(i+1)){
        nums.push(i+1);
    }
}
console.log(nums);