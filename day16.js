//leet code-69;
let sqrt=()=>{
    let x=8;
    let right=x;
    let left=1;
    let ans=null;
    while(left<=right){
        let mid=parseInt(left+right)/2;
        if(mid*mid===right) return mid;
        else if(mid*mid>x) right=mid-1;
        else {
            ans=mid;
            left=mid+1;
        }
    }
    return ans;
}
console.log(sqrt());


