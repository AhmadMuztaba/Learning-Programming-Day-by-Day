let n=2;
let pick=1;
const guess=(n)=>{
    if(n>pick){
        return 1;
    }
    else if(n<pick){
        return -1;
    }
    else{
        return 0;
    }
}
var guessNumber = function(n) {
    const binarySearch=(min,max)=>{
        mid=(min+max)/2;
        if(guess(mid)==0){
            return mid;
        }
        else if(guess(mid)==1){
            return binarySearch(mid+1,max);
        }
        else{
            return binarySearch(min,mid-1);
        }
    }
    let g=binarySearch(1,n);
    return g;
};
console.log(guessNumber(n));