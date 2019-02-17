export const validation = (formValues, generatedCode) => {
    var validation = {
        name: true,
        email: true,
        message: true,
        code: true,
        validated: false
    }
    
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (formValues.name === '') {
        validation = { ...validation, name: false}
    }
    else { 
        validation = { ...validation, name: true}
    }
    
    if (!formValues.email.match(regex)) {
        validation = { ...validation, email: false}
    }
    else { 
        validation = { ...validation, email: true}
    }

    if (formValues.message === '') {
        validation = { ...validation, message: false}
    }
    else { 
        validation = { ...validation, message: true}
    }
    
    if (formValues.code !== generatedCode) {
        validation = { ...validation, code: false}
    }
    else { 
        validation = { ...validation, code: true}
    }

    validation.validated = validation.name && validation.email && validation.message && validation.code

    return validation;
}