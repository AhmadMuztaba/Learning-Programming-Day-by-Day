//leet code-100
var isSameTree = function (p, q) {
    const sametree = (p, q) => {
        let queue = [];
        queue.push([p, q]);
        while (queue.length > 0) {
            const [x, y] = queue.shift();
            if (x == null && y == null) {
                continue;
            }
            else if (!p || !q) {
                return false;
            }
            if (x && y) {
                if (x.val == y.val) {
                    queue.push([x.left, y.right]);
                    queue.push([x.right, y.left]);
                } else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        return true;
    }
    return sametree(p, q);
};