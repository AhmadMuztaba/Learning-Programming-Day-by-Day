class Queue{
    constructor(){
        this.address=[];
        this.length=0;
    }
    push(value){
        this.address.push(value);
        this.length++;
    }
    remove(){
        if(this.length>0){
            this.address.shift();
        this.length--;
        }else{
            return undefined;
        }
    }
    isEmpty(){
        if(this.length<=0){
            console.log('queue is Empty');
        }
        else{
            console.log('not empty');
        }
    }
    front(){
        return this.address[0];
    }
    print(){
        console.log(this.address);
        console.log('the size is '+this.length);
    }
}
const q1=new Queue();
q1.push(5);
q1.push(9);
console.log(q1.front());
q1.push(10);
q1.remove();
console.log(q1.front());
q1.isEmpty();
q1.print();