export const validation = (value,validation) => {

    let valid = true
    
    if(validation.required){
       valid =  value.trim() !== "" && valid
    }
    if(validation.url){
        valid = validation.url.test(value) && valid
    }

    return valid
}