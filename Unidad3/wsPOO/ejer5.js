class Student extends Lambdasian{

    constructor({name, age, location, previousBackground, className, favSubjects}){
        super(name, age, location);
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
    }

    listSubjects(){
        return ("Love " + this.favSubjects.join(", "));
    }

    PRAssignment(subjet){
        return (this.name + " has submitted a PR for " + subjet);
    }

    sprintChallenge(subjet){
        return (this.name + " has begun sprint challenge on " + subjet);
    }

    
}