class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}
class LinkedList{
    constructor(){
        this.head=null
    }
    insertAtFirst(data){
        this.head=new Node(data,this.head);
    }
    insertAtLast(data){
        const node=new Node(data);
        let current=this.head;
        while(current.next!==null){
            current=current.next;
        }
        current.next=node;
    }
    insertAtAnyIndex(data,index){
        const node=new Node(data);
        let current=this.head;
        let previous;
        let count=0;
        while(count<index){
            previous=current;
            current=current.next;
            count++;
        }
        previous.next=node;
        node.next=current;
    }
    removeFromAnyIndex(index){
        let current=this.head;
        let previous;
        if(index==0){
            this.head=current.next;
        }else{
            let count=0;
        while(count<=index){
            previous=current;
            current=current.next;
            count++;
        }
        previous.next=current.next;
        }
        
    }

    printList(){
        let current=this.head;
        while(current!==null){
            console.log(current.data);
            current=current.next;
        }
    }
}

const list=new LinkedList();
list.insertAtFirst(5);
list.insertAtLast(6);
list.insertAtAnyIndex(9,1);
list.removeFromAnyIndex(0);
list.printList();