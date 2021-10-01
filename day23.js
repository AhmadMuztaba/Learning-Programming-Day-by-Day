//leet code-118
//Pascal's Triangle
const numRows=8;
let number=[];
if(numRows>=1){
    number.push([1]);
}
if(numRows>=2){
    number.push([1,1]);
}
if(numRows>2){
   while(number.length<numRows){
        let arr=new Array(number[number.length+1]);
        arr[0]=number[number.length-1][0];
         arr[number.length]=number[number.length-1][number[number.length-1].length-1];
       for(let i=1;i<number[number.length-1].length;i++){
         arr[i]=number[number.length-1][i-1]+number[number.length-1][i];
         }
     number.push(arr);
 }
}
console.log(number);


//leet code->119
const rowIndex=4;
if(rowIndex==0){
    return [1];
}
else if(rowIndex==1){
    return [1,1];
}
else if(rowIndex==2){
    return [1,2,1];
}
else{
    let number=[];
    if(rowIndex>=1){
        number.push([1]);
    }
    if(rowIndex>=2){
        number.push([1,1]);
    }
    if(rowIndex>2){
       while(number.length<rowIndex+1){
            let arr=new Array(number[number.length+1]);
            arr[0]=number[number.length-1][0];
             arr[number.length]=number[number.length-1][number[number.length-1].length-1];
           for(let i=1;i<number[number.length-1].length;i++){
             arr[i]=number[number.length-1][i-1]+number[number.length-1][i];
             }
         number.push(arr);
     }
    }
    console.log(number[rowIndex]);
}

/*
As you see you can get any element of Pascal's Triangle in O(N) time and constant space complexity.
for first row first column we have 1C1
for second row first column we have 2C1
for second row second column we have 2C2
..... and so on
Therefore we can infer, for ith row and jth column we have the number iCj

And calculating this is pretty easy just in N time (factorial basically).

==> nCr = n*(n-1)*(n-2)...(r terms) / 1*2*..........*(r-2)*(r-1)*r

Now the question asks us to find the complete row.
If we calculate all the elements in this manner it would be quadratic in time. But, since its formula is pretty sleek, we proceed as follows:

suppose we have nCr and we have to find nC(r+1), like 5C3 and 5C4
==> 5C3 = 5*4*3 / 1*2*3

to get the next term we multiply numerator with its next term and denominator with its next term. As,
==> 5C4 = 5*4*3 * 2 / 1*2*3 * 4

We are following this simple maths logic to get the complete row in O(N) time.

*/

//Alternative to solution->119
var getRow = function(r) {
    var ans = new Array(r+1)
    ans[0]=ans[r]=1
    for(i=1,up=r;i<r;i++,up--)
        ans[i] = ans[i-1]*up/i
    return ans
};
