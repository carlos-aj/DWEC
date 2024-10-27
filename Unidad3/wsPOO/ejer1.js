class Person{
    constructor(name, age){
        this.age = age;
        this.name = name;
        this.stomach = [];
    }

     

    eat(somefood){
        if(this.stomach.length >= 10){
            return "Stomach is full";
        }else{
        return this.stomach.push(somefood);
        }
    }

    poop(){
        return this.stomach = [];
    }

    toString(){
        return this.name + ", " + this.age; 
    }
}

