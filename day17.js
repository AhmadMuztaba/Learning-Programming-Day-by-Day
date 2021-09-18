//leet code-83
var deleteDuplicates = function (head) {
    let cur = head;
    while (cur !== null) {
        if (cur.next !== null) {
            if (cur.val === cur.next.val) {
                let run = cur.next;
                while (1) {
                    if (run.next !== null) {
                        if (run.val === run.next.val) {
                            run = run.next
                        }
                        else {
                            break;
                        }
                    }
                    else {
                        break;
                    }
                }
                cur.next = run.next;
            }
        }
        cur = cur.next;
    }
    return head;

};

//Linked List
class Node {
    constructor(val, next = undefined) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
class List {
    constructor() {
        this.head = null;
        this.p = null;
    }
    addItem(data) {
        if (this.head === null) {
            this.head = new Node(data);
            this.p = this.head;
        }
        else if (this.head !== null) {
            while (this.head.next != null) {
                this.head = this.head.next;
            }
            this.head.next = new Node(data);
        }
    }
    removeDuplicate() {
        let cur = this.p;
        while (cur !== null) {
            if (cur.next !== null) {
                if (cur.val === cur.next.val) {
                    let run = cur.next;
                    while (1) {
                        if (run.next !== null) {
                            if (run.val === run.next.val) {
                                run = run.next
                            }
                            else {
                                break;
                            }
                        }
                        else {
                            break;
                        }
                    }
                    // cur.next=cur.next.next 
                    cur.next = run.next;
                }
            }
            cur = cur.next;
        }
        console.log(this.p);
    }
    print() {
        while (this.p !== null) {
            console.log(this.p.val);
            this.p = this.p.next;
        }
    }
}

const a = new List();
a.addItem(1);
a.addItem(1);
a.addItem(1);
a.addItem(1)
a.removeDuplicate();

