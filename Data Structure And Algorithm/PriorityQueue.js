class Priority{
    constructor(){
        this.collection=[];
    }
    add(...element){
        if(this.collection.length<=0){
            this.collection.push(element);
            return;
        }
        let added=false;
       for(let i=0;i<this.collection.length;i++){
           if(element[1]>this.collection[i][1]){
               this.collection.splice(i,0,element);
               added=true;
               return;
           }
       }
       if(!added){
           this.collection.push(element);
       }
    }
    remove(){
        return this.collection.shift();
        
    }
    print(){
        console.log(this.collection);
    }
}
const q1=new Priority();
q1.add(5,1);
q1.add(4,2);
 q1.add(5,2);
 q1.remove();
q1.print();