class Node{
    constructor(){
        this.keys=new Map();
        this.end=false;
    }  
    setend(){
        this.end=true
    }
    isend(){
        return this.end;
    }
}
class Trie{
    constructor(){
        this.root=new Node();
        }
    add(input,node=this.root){
        if(input.length==0){
        node.setend();
        return;
        }else if(!node.keys.has(input[0])){
            node.keys.set(input[0],new Node());
            return this.add(input.substr(1),node.keys.get(input[0]));
        }else{
            return this.add(input.substr(1),node.key.get(input[0]));
        }
    }
    search(word,node=this.root){
        if(word.length===0){
            console.log('word found');
            return;
        }
        if(!node.keys.has(word[0])){
            console.log('not found');
            return;
        }else {
           return this.search(word.substr(1),node.keys.get(word[0]));
        }
    }
    print(){
        let allword=[];
        let word="";
        let search=function(node){
       if(node.keys.size>=0){
        for(let letter of node.keys.keys()){
            word=word+letter;
            search(node.keys.get(letter));
         }
         if(node.isend()){
             allword.push(word);
             word=""
         }
         }else{
             return;
         }
       }
       search(this.root);
       console.log(allword);
    }
}
const trie=new Trie();
trie.add('sazid');
trie.add('lol');
 trie.search('sazid');
 trie.search('lol');
 trie.print();