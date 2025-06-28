class ValidationError extends Error{
    constructor(message){
        super(message)
        this.name = `Validation Error`
    }
}

function validateName(name){
    if(name.length<3){
        throw new ValidationError( `Name must be at least 3 characters long`)
    }
}

validateName(`N`)