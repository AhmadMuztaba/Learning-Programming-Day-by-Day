//leet code-94
var inorderTraversal = function(root) {
    if(root==null){
            return [];
    }
    else{
        let array=[];
        function traverseInOrder(node){
        node.left && traverseInOrder(node.left);
        array.push(node.val);
        node.right&&traverseInOrder(node.right);
            }
        traverseInOrder(root);
        return array;
    }
};