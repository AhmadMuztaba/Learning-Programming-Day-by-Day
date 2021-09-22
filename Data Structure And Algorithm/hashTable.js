class Hashtable{
    constructor(){
        this.storage=new Array(1005);
    }
    hash(key,max){
        let hash=0;
        for(let i=0;i<key.length;i++){
            hash+=key.charCodeAt(i);
        }
     return hash%max;
    }
    hashtable(key,value){
        let index=this.hash(key,this.storage.length);
        if(this.storage[index]){
            this.storage.push[key,value]
        }else{
            this.storage[index]=[[key,value]]
        }
    }
    search(key){
        let index=this.hash(key,this.storage.length);
        if(!this.storage[index]){
            return null;
        }else{
            return this.storage[index].find(x=>x[0]===key)[1];
        }
    }
}
const hash1=new Hashtable();
hash1.hashtable('sazid','hu');
hash1.hashtable('sa','zi');
hash1.hashtable('sd','h');
hash1.hashtable('id','ju');
console.log(hash1.search('id'));
