//airport and routes given.
//destination given
//check if there is a route between PHX and BKK
//All the possible Routes
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');
const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];

const adjList=new Map();

//adding node
function addNode(node){
    adjList.set(node,[]);
}

//undirected graph
function addEdge(from,to){
    adjList.get(from).push(to);
    adjList.get(to).push(from);
}

//add all the airports
airports.forEach(node=>addNode(node));

//add all the routes
routes.forEach(route=>addEdge(...route));

const BFS=(start)=>{
    let queue=[];
    let visited=new Set();
    queue.push(start);
    visited.add(start);
    while(queue.length>0){
        let node=queue.shift();
        let adjNodes=adjList.get(node);
        for(const adjNode of adjNodes){
            if(adjNode==='BKK'){
                console.log('found it');
            }
            if(!visited.has(adjNode)){
                visited.add(adjNode);
                queue.push(adjNode);
            }
            
        }
    }
}
BFS('PHX');