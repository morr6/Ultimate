export const validation = (formValues, generatedCode) => {
    var validation = {
        name: true,
        email: true,
        message: true,
        code: true,
        validated: false
    }
    

    if (formValues.name === '') {
        validation = { ...validation, name: false}
    }
    else { 
        validation = { ...validation, name: true}
    }
    
    if (formValues.email === '') {
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