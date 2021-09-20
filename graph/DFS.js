//airport and routes given.
//destination given
//check if there is a route between PHX and BKK
// find a route as quickly as possible
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

const DFS=(start,visited=new Set())=>{
    visited.add(start);
    let adjNodes=adjList.get(start);
    for(const adjNode of adjNodes){
        if(adjNode==='BKK'){
            console.log('found');
            return;
        }
        if(!visited.has(adjNode)){
            return DFS(adjNode,visited);
        }
    }
}
DFS('PHX');