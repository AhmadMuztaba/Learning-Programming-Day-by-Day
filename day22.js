//leet code-136;
let nums=[4,1,2,1,2];
let count=0;
let visited=new Set();
let one=0;
for(let i=0;i<nums.length;i++){
    count=0;
    if(visited.has(nums[i])){
        continue;
    }else{
        visited.add(nums[i]);
        let ans=nums.map((v)=>{
            if(v==nums[i]){
                count=count+1;
            }
            return count;
        });
        if(ans[ans.length-1]<2){
            one=nums[i];
            break;
        };
    }
}
console.log(one);

//ALTERNATIVE_SOLUTION
let mem=new Set;
for(const num of nums){
    if(mem.has(num)){
        mem.delete(num);
    }else{
        mem.add(num);
    }
}
let newans=[...mem][0];
console.log(newans);