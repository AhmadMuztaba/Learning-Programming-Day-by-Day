//Leet code-145
var postorderTraversal = function(root) {
    if(root==null){
            return [];
        }
        else{
            let array=[];
            function traversePostOrder(node){ 
                node.left && traversePostOrder(node.left);
                node.right && traversePostOrder(node.right);
                array.push(node.val);
            }
            traversePostOrder(root);
            return array;
        }
};