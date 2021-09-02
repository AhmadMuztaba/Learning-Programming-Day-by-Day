//leetcode-53
const nums=[-2,1,-3,4,-1,2,1,-5,4];
let [max]=nums
right=0;

while(right<nums.length){
    nums[right]+=nums[right-1]>0?nums[right-1]:0;
    max=Math.max(max,nums[right]);
    right++;
}
console.log(max);