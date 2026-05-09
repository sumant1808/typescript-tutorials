class User {

private _firstName: string = '';
private _lastName: string = '';

set firstName(value: string) {
    if(value.trim() =="") { 
        throw new Error('First name cannot be empty');  
    }
    this._firstName = value;
}

set lastName(value: string) {
    if(value.trim() =="") { 
        throw new Error('Last name cannot be empty');  
    }
    this._lastName = value;
}

get fullName() {
    return this._firstName + ' ' + this._lastName;
}

}

const max = new User();
max.firstName = 'Max';
max.lastName = 'Smith';   
console.log(max.fullName);

