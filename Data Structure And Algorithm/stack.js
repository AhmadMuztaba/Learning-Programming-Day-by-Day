class Stack{
    constructor(){
        this.length=0;
        this.address={};
    }
    push(data){
        this.address[this.length]=data;
        this.length++;
        return this.address;
    }
    pop(){
        if(this.length<0){
            return undefined;
        }
        this.length--
        delete this.address[this.length];
    }
    printStack(){
        console.log(this.address);
    }
}
const stack=new Stack();
stack.push(5);
stack.push(6);
stack.push(9);
stack.pop();
stack.printStack();