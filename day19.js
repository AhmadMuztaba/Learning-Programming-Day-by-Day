//leet code->997
let n=2;
let allMember=[];
for(let i=1;i<=n;i++){
    allMember.push(i);
}
let judge=-1;
let trust=[[1,2]];
const adjList=new Map();
function addNode(node){
    adjList.set(node,[]);
}
function addEdge(from,to){
    adjList.get(from).push(to);
}
allMember.forEach(node=>addNode(node));
trust.forEach(node=>addEdge(...node));

allMember.forEach((member)=>{
    let array=adjList.get(member);
    if(array.length<=0){
        judge=member;
    }
})
let newJudge=judge;
console.log(judge);
if(judge!==-1){
    allMember.forEach((member)=>{
       if(member!==judge){
            let array=adjList.get(member);
            if(!array.includes(judge)){
                newJudge=-1;
            }
        }
})
}
console.log(newJudge);
