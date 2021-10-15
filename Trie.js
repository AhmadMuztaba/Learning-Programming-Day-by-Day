class Node{
    constructor(){
        this.key=new Map();
        this.end=false;
        this.setEnd=function(){
            this.end=true
        }
        this.isEnd=function(){
            return this.end;
        }
    }
}
class Trie{
    constructor(){
        this.root=new Node();
    }
    add(word){
       const wordAdd=(input,node=this.root)=>{
            if(input.length==0){
                node.setEnd();
                return;
            }
            else{
                if(!node.key.has(input[0])){
                    node.key.set(input[0],new Node());
                    wordAdd(input.substr(1),node.key.get(input[0]));
                }else{
                    wordAdd(input.substr(1),node.key.get(input[0])); 
                }
            }
        }
        wordAdd(word);
    }
    isWord(input){
        const word=(w,node=this.root)=>{
            if(w.length>1){
                if(node.key.has(w[0])){
                    return word(w.substr(1),node.key.get(w[0]));
                }
                else{
                    return false;
                }
            }
            else if(w.length==1){
                if(node.key.has(w[0])){
                    if(node.key.get(w[0]).isEnd()==true){
                        return true;
                    }
                    else{
                        return false
                    }
                }
                else {
                    false;
                }
            }else{
                return false;
            }
            
        }
        return (word(input));
    }
    printWord(){
        let word=[];
        const print=function(node=this.root,str){
            if(node.key.size>=0){
                for(let key of node.key.keys()){
                    print(node.key.get(key),str.concat(key));
                }
                if(node.isEnd()==true){
                    word.push(str);
                }
            }else{
                return;
            }
        }
        print(this.root,new String());
        console.log(word);
    }
}
const trie=new Trie();
trie.add("window");
trie.add("humzx");
console.log(trie.isWord("window"));
console.log(trie.isWord("sasa"));
trie.printWord();
