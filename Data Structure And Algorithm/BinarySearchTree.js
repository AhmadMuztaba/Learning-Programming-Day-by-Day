class Node{
    constructor(data,left=null,right=null){
        this.data=data;
        this.left=left;
        this.right=right;
    }
}

class BST{
    constructor(){
        this.root=null;
    }
   
    add(data){
        let node=this.root;
        if(this.root==null){
            this.root=new Node(data);
        }
        else if(this.root){
            const tree=function(root){
                if(data<root.data){
                    if(root.left==null){
                        return root.left=new Node(data);
                    }
                    else{
                       return tree(root.left);
                    }
                    
                }
                else if(data>root.data){
                    if(root.right==null){
                      return root.right=new Node(data);
                    }
                    else{
                       return tree(root.right);
                    }
                }
                else{
                    return null;
                }
            }
            return tree(node);
        }
    }

    findMin(){
        let node=this.root;
        while(node.left!==null){
            node=node.left;
        }
        console.log(node.data);
    }
    findMax(){
        let node=this.root;
        while(node.right!=null){
            node=node.right;
        }
        console.log(node.data);
    }
    search(data){
        let node=this.root;
        while(node!==null){
            if(node.data===data){
                return console.log('found');
            }
            else if(data<node.data){
                    node=node.left;
             }
            else if(data>node.data){
                node=node.right;
        }
       }
       if(node===null){
           console.log('not found');
       }
    }

    findShortestLength(){
        let node=this.root;
        let leftCount=0;
        let rightCount=0;
        while(node!==null){
            leftCount++;
            node=node.left;
        }
        node=this.root;
        while(node!==null){
            rightCount++;
            node=node.right;
        }
        if(leftCount<rightCount){
            console.log(leftCount);
        }else{
            console.log(rightCount);
        }
    }
    findMaxLength(){
        let node=this.root;
        let leftCount=0;
        let rightCount=0;
        while(node!==null){
            leftCount++;
            node=node.left;
        }
        node=this.root;
        while(node!==null){
            rightCount++;
            node=node.right;
        }
        if(leftCount>rightCount){
            console.log(leftCount);
        }else{
            console.log(rightCount);
        }
    }
    preorder(){
        if(this.root==null){
            return null;
        }
        else{
            let tree=[];
            function traverse(root){
                    tree.push(root.data);
                    root.left && traverse(root.left);
                    root.right && traverse(root.right);
            }
            traverse(this.root);
            return tree;
        }
    }
    inorder(){
        if(this.root==null){
            return null;
        }
        else{
            let tree=[];
            function traverse(root){
                    root.left && traverse(root.left);
                    tree.push(root.data);
                    root.right && traverse(root.right);
            }
            traverse(this.root);
            return tree;
        }
    }
    postorder(){
        if(this.root==null){
            return null;
        }
        else{
            let tree=[];
            function traverse(root){
                    root.left && traverse(root.left);
                    root.right && traverse(root.right);
                    tree.push(root.data);
            }
            traverse(this.root);
            return tree;
        }
    }
    
}

const bst=new BST();
bst.add(5);
bst.add(4);
bst.add(9);
bst.add(1);
bst.findMin();
bst.findMax();
bst.search(2);
bst.search(9);
bst.findShortestLength();
bst.findMaxLength();
console.log(bst.inorder());
console.log(bst.preorder());
console.log(bst.postorder());