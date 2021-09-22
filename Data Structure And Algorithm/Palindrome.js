let word=process.argv[2].split('=')[1];
let stock=[];
let rword=[];
let i;

for(i=0;i<word.length;i++){
    stack=stock.push(word[i]);
}
for(i=0;i<word.length;i++){
    rword+=stock.pop();
}
if(rword==word){
console.log('pali');
}
else{
    console.log('not');
}

