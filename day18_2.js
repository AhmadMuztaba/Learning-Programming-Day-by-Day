//Leet code-144
var preorderTraversal = function(root) {
    if(root==null){
            return [];
        }
        else{
            let array=[];
            function traversePreOrder(node){ 
                array.push(node.val);
                node.left && traversePreOrder(node.left);
                node.right && traversePreOrder(node.right);
            }
            traversePreOrder(root);
            return array;
        }
};