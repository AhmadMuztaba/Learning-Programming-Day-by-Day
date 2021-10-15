class Human{
    constructor(name,height,nationality){
        this.name=name;
        this.height=height;
        this.nationality=nationality;
    }
    static compare(human1,human2){
        return human1.name==human2.name;
    }
    dance(){
        console.log(`${this.name} is dancing in the sky`);
    }
}
class Programmer extends Human{
    constructor(name,height,nationality,skills){
        super(name,height,nationality);
        this.skills=skills
    }
}
const human1=new Human('sazid','5.6','Bangladeshi');
const programmer1=new Programmer('Ahmad','5.7','Bangleshi',['JS,Python']);
programmer1.dance();
console.log(this.prompt);