//leet code-101
var isSymmetric = function(root) {
    var isSameTree = function(p, q) {
    let stack = [[p,q]];
    
    while (stack.length){
        let [x,y] = stack.shift();
		
        // if both leaves
        if (x==null && y==null) continue; 
        if(!x || !y) return false;
        if(x.val == y.val){
            stack.push([x.left, y.right]);
            stack.push([x.right, y.left]);
        }
        else return false;
    }
    return true;
}
    const match=isSameTree(root.left,root.right);
    return match;
};