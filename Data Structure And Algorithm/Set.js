class Set{
    constructor(){
        this.address=[];
        this.length=0;
    }
    has(data){
        if(this.address.indexOf(data)==-1){
            return false;
        }
        else{
            return true
        }
    }
    add(data){
        if(!this.has(data)){
            this.address.push(data);
            this.length++;
        }
    }
    remove(data){
        this.index=this.address.indexOf(data);
        if(this.index===-1){
            return null;
        }
        this.address.splice(this.index,1);
    }
    show(){
        console.log(this.address);
    }
    subset(mainset){
        const values=this.address;
        const setValues=mainset.address;
       const check=values.every((r)=>{
            return setValues.includes(r);
        })
        return check;
    }
    intersect(set2){
        const set1=new Set();
        const newSet=set2.address;
        newSet.forEach((value)=>{
            if(this.has(value)){
              set1.add(value);
            }
        })
        set1.show();
    }
    union(set2){
        const newSet=new Set();
        const values=this.address;
        const set2values=set2.address;
        values.forEach((value)=>{
            newSet.add(value);
        })
        set2values.forEach((value)=>{
            newSet.add(value);
        })
        newSet.show();
    }
}

const set=new Set();
set.add(5);
set.add(5);
set.add(6);
set.remove(6);
set.show();
const set1=new Set();
set1.add(6);
set1.add(5);
set1.show();
console.log(set.subset(set1));
set.union(set1);
set.intersect(set1);

