let userName = document.getElementById("username")
let email =document.getElementById("email-input")
let password = document.getElementById("password")
let repassword = document.getElementById("reenterpassword")
let male_radio = document.getElementById("radio-male")
let female_radio = document.getElementById("radio-female")
let other_radio = document.getElementById("other-radio")
let payment = document.getElementById("payment")
let checkbox = document.getElementById("agree-checkbox")
let submit_btn = document.getElementById("submit-btn")

function onSubmitClick(){

    email = email.value 
   


    if (userName.value.length<4)
    alert("User Name Should more than 4 character")
    else if(email.lastIndexOf("@") <= 0 //check if there is a letter '@' from last 
    || email.indexOf("@") <= 0 //check if there is a letter '@' from begin 
    || email.indexOf("@.") !== -1 //check if there is a word '@.'
    || !email.endsWith(".com") //check if there is a word '.com' in the end of email
    || email.lastIndexOf("@") !== email.indexOf("@")) //check if there are 2 letters '@' or not
    alert("Email need contain '@' and '.com'")
    else if (!male_radio.checked && !female_radio.checked)
    alert("plis check your gender")
    else if (password.value.length<6)
        alert("password need 7 minimum words")
    else if (!checkbox.checked)
    alert("You must agree Terms and Conditions")    
    else
    alert("Register "+email+" in "+" with Payment Method "+payment.value+" Success ")
    
}