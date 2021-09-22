//Level Order-->BFS
// Pre-Order -->DFS

class Node{
    constructor(data,left=null,right=null){
        this.data=data;
        this.left=left;
        this.right=right;
    }
}
class BST{
    constructor(){
        this.root=null
    }
    add(data){
        if(this.root==null){
            this.root=new Node(data);
        }
        else if(this.root!==null){
            const searchTree=(node)=>{
                if(data<=node.data){
                    if(node.left===null){
                        node.left=new Node(data);
                    }
                    else if(node.left!==null){
                        searchTree(node.left);
                    }
                }else if(data>=node.data){
                    if(node.right===null){
                        node.right=new Node(data);
                    }else if(node.right!==null){
                        searchTree(node.right);
                    }
                }
            }
            searchTree(this.root);
        }
    }
    remove(val){
        let removeNode=(node,data)=>{
            if(!node.data){
                return;
            }
            if(node.data===data){
                if(node.left===null){
                    return node.right;
                }
                else if(node.right===null){
                    return node.left;
                }
                else{
                    let temp=node.right;
                    while(temp.left!==null){
                        temp=temp.left;
                    }
                    node.data=temp.data;
                    removeNode(node.right,temp.data);
                }
            }
            else if(node.data>data){
                removeNode(node.left,data)
            }
            else if(node.data<data){
                removeNode(node.right,data);
            }
        }
        removeNode(this.root,val);
    }

    findMinHeight(node = this.root) {
        if (node == null) {
            return -1;
        };
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if (left < right) {
            return left + 1;
        } else {
            return right + 1;
        };
    }
    findMaxHeight(node=this.root){
        if(node==null){
            return -1;
        }
        let left=this.findMaxHeight(node.left);
        let right=this.findMaxHeight(node.right);
        if(left>right){
            return left+1;
        }else{
            return right+1;
        }
    }
    treeInorder=()=>{
        if(this.root==null){
            return null;
        }
        else{
            let array=[];
            function traverseInOrder(node){
                node.left&&traverseInOrder(node.left);
                array.push(node.data);
                node.right&&traverseInOrder(node.right);
            }
            traverseInOrder(this.root);
            return array;
        }
    }
    treePreorder=()=>{
        if(this.root==null){
            return null;
        }
        else{
            let array=[];
            function traversePreOrder(node){ 
                array.push(node.data);
                node.left && traversePreOrder(node.left);
                node.right && traversePreOrder(node.right);
            }
            traversePreOrder(this.root);
            return array;
        }
    }
    treePostorder=()=>{
        if(this.root==null){
            return null;
        }
        else{
            let array=[];
            function traversePostOrder(node){ 
                node.left && traversePostOrder(node.left);
                node.right && traversePostOrder(node.right);
                array.push(node.data);
            }
            traversePostOrder(this.root);
            return array;
        }
    }
    levelOrder=()=>{
        let queue=[];
        let result=[];
        if(this.root!==null){
            queue.push(this.root);
            while(queue.length>0){
                let node=queue.shift()
                result.push(node.data);
                if(node.left){
                    queue.push(node.left)
                }if(node.right){
                    queue.push(node.right);
                }
            }
        }
        return result;
    }

}
const bst=new BST();
bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);
bst.remove(6);
bst.add(1);
bst.remove(1);
bst.add(9);
bst.add(3);
// console.log(bst.findMinHeight());
// console.log(bst.findMaxHeight());
// console.log(bst.treeInorder());
// console.log(bst.treePreorder());
// console.log(bst.treePostorder());
console.log(bst.levelOrder());