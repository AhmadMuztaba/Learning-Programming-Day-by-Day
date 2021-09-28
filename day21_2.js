//leet code-104
var maxDepth = function(root) {
    const depth=(node)=>{
        if(node==null){
            return 0;
        }
        let left=depth(node.left);
        let right=depth(node.right);
        return Math.max(left,right)+1;
    }
    const max=depth(root);
    return max;
};


