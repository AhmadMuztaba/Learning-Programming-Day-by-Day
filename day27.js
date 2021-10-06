//leet code442
 const nums = [4,3,2,7,8,2,3,1];
 let read=new Map();
 let duplicate=[];
 for(let i=0;i<nums.length;i++){
    if(!read.has(nums[i])){
        read.set(nums[i],1);
    }else if(read.has(nums[i])){
        duplicate.push(nums[i]);
        let val=read.get(nums[i]);
        read.set(nums[i],val+1);
    }
 }
 console.log(duplicate);
