let password = "Are Y0u Happy N0w!"



if(password.length >= 10 && /\d/.test(password) === true && password.length <= 24){
    console.log('Password is Valid!')
    //Added condition to be if password is more than length 24 not valid.
} else if(password.length >= 24){
    console.log('Password Length exceeds 24 charaters')
} else if(password.length < 10 || /\d/.test(password) === false){
    console.log('Not a valid Password')
    //Added if password is blank 'enter password'
} else {
    console.log('Enter password')
}