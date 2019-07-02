class Teacher {
    constructor(name, subject){
        this._name = name;
        this._subject = subject;
        this._yearsOfService = 0;
    }

    getName(){
        return this._name;
    }

    getInitials(){
        var nameArray = this._name.split(' ');
        var initials = '';
        for (var name of nameArray){
            initials += name[0].toUpperCase();
        }

        return initials;
    }

    getSubject(){
        return this._subject;
    }

    getYearsService(){
        return this._yearsOfService;
    }

    setYearsService(number){
        this._yearsOfService = number;
    }
}

module.exports = Teacher;