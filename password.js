let password = "Are Y0u Happy N0w!"

pwdRegexNum = /[0-9]/
pwdRegexTxt = /[a-z]/

if(password.length >= 10 && pwdRegexNum.test(password) === true && pwdRegexTxt.test(password) === true && password.length <= 24){
    console.log(`Password is Valid!`)
    //Added condition to be if password is more than length 24 not valid.
} else if(password.length >= 24){
    console.log('Password Length exceeds 24 charaters')
} else if(password.length < 10 || pwdRegexNum.test(password) === false || pwdRegexTxt.test(password) === false){
    console.log('Not a valid Password')
    //Added if password is blank 'Enter password'
} else {
    console.log('Enter password')
}