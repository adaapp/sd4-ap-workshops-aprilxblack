class Student {
    constructor(name, tutorgroup){
        this._name = name;
        this._tutorgroup = tutorgroup;
    }

    getName(){
        return this._name;
    }

    getYearGroup(){
        return this._tutorgroup.substring(0, this._tutorgroup.length - 1);
    }

    getForm(){
        return this._tutorgroup.substring(this._tutorgroup.length - 1);
    }
}

module.exports = Student;