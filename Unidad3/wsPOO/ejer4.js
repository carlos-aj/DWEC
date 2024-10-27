class Instructor extends Lambdasian{
    constructor({name, age, location, specialty, favLanguage, catchPhrase}){
        super(name, age, location);
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }

    demo(subjet){
        return ("Today we are learning about " + this.subjet);
    }

    grade(Student, subjet){
        return (Student.name + "receives a perfect score on " + subjet);
    }
}