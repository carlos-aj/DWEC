class ProjectManager extends Instructor{
    
    constructor({name, age, location, specialty, favLanguage, catchPhrase, gradClassName, favInstructor}){
        super(name, age, location, specialty, favLanguage, catchPhrase)
            this.gradClassName = gradClassName;
            this.favInstructor= favInstructor;
        
    }

    standUp(channel){
        return (this.name + " announces to " + channel + ", @" + channel + " standy times!");
    }

    debugsCode(Student, subjet){
        return (this.name + " debugs " + Student.name + "'s code on " + subjet);
    }
}