const passwordRegex: RegExp = /^[a-zA-Z0-9]{4,16}$/;
const usernameRegex: RegExp = /^[a-zA-Z0-9]{3,12}$/;
const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


export const authValidator = (type:string,value:string) :string =>{
    switch(type){
        case "password":
            if (value.length < 16 && value.length > 4){
                const isValid:boolean = passwordRegex.test(value)
                return isValid ? "valid" : "Password Can Only Contain Letter And Number.";
            }else{
                return "Password must be between 4 and 16 characters long."
            }
        case "username":
            if (value.length < 12 && value.length > 3){
                const isValid:boolean = usernameRegex.test(value)
                return isValid ? "valid" : "Username Can Only Contain Letter And Number.";
            }else{
                return "Username must be between 3 and 12 characters long."
            }
        case "email":
            const isValid:boolean = emailRegex.test(value)
            return isValid ? "valid" : "Email Is Invalid."
        default :
            return "Somthing Went Wrong."
    }
}