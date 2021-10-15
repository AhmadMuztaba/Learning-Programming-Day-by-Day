//leet code-->155
var MinStack = function() {
    this.ar=[];
};

MinStack.prototype.push = function(val) {
    this.ar.push(val);
    return null;
};

MinStack.prototype.pop = function() {
    let g= this.ar.pop();
    return null;
};

MinStack.prototype.top = function() {
    return this.ar[this.ar.length-1]==undefined?null:this.ar[this.ar.length-1];
};

MinStack.prototype.getMin = function() {
    let min=undefined;
    if(this.ar[0]){
        min=this.ar[0];
        for(let ar of this.ar){
            if(ar<min){
                min=ar;
            }
        }
    }
  return min==undefined?null:min; 
};