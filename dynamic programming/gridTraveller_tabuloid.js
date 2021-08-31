const gridTraveller=(m,n)=>{
   let arr=new Array(m+1);
   for(i=0;i<=m;i++){
    arr[i]=new Array(n+1);
   }
   for(i=0;i<=m;i++){
       for(j=0;j<=n;j++){
           arr[i][j]=0;
       }
   }
   arr[1][1]=1;
   for(i=0;i<=m;i++){
       for(j=0;j<=n;j++){
           let cur=arr[i][j]
          if(j+1<=n)arr[i][j+1]+=cur;
           if(i+1<=m)arr[i+1][j]+=cur;
       }
   }
   return arr[m][n];
}

console.log(gridTraveller(3,3));