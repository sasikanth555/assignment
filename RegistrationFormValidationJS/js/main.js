const FIRST_NAME_REQUIRED = "First Name must be provided";
const FIRST_NAME_LENGTH = "First Name minimum 2 characters are allowed";
const LAST_NAME_REQUIRED ="Last Name must be provided";
const LAST_NAME_LENGTH =  "Last Name minimum 2 characters are allowed";
const EMAIL_REQUIRED = "Please provide Email address";
const INVALID_EMAIL_ADDRESS = "Please enter valid email address";
const PHONE_NUMBER_REQUIRED = "Please provide phone number";
const INVALID_PHONE_NUMBER = "Please enter valid phone number";
const HOBBIES_REQUIRED = "Please select atleast one hobby";
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PHONE_REGEX = "[789][0-9]{9}";

    function validateFirstName(){
        const firstName     = document.getElementById("firstName").value;
        const firstNameError= document.getElementById("firstNameError");
        if (firstName == "") {
            firstNameError.innerHTML = FIRST_NAME_REQUIRED;
            return false;
        }else if(firstName.length <=1 ){
            firstNameError.innerHTML = FIRST_NAME_LENGTH;
            return false;
            }else{
                firstNameError.innerHTML='';
            }
        }

        function validateLastName(){
            const lastName      = document.getElementById("lastName").value;
            const lastNameError = document.getElementById("lastNameError");
            if (lastName == "") {
                lastNameError.innerHTML = LAST_NAME_REQUIRED;
                return false;
            }else if(lastName.length <=1 ){
                lastNameError.innerHTML = LAST_NAME_LENGTH;
                return false;
                }else{
                    lastNameError.innerHTML='';
                }
            }

            function emailValidation(){
                const email         = document.getElementById("email").value;
                const emailError    = document.getElementById("emailError");
                if(email == ''){
                    emailError.innerHTML = EMAIL_REQUIRED;
                    return false;
                }else if(!email.match(EMAIL_REGEX)){
                    emailError.innerHTML = INVALID_EMAIL_ADDRESS;
                    return false
                }else{
                    emailError.innerHTML='';
                }
            }
            function validatePhoneNum(){
                const phoneNum           = document.getElementById("phoneNumber").value;
                const phoneNumError      = document.getElementById("phoneNumberError");

                if(phoneNum == ''){
                    phoneNumError.innerHTML = PHONE_NUMBER_REQUIRED;
                    return false;
                }else if(!phoneNum.match(PHONE_REGEX)){
                    phoneNumError.innerHTML = INVALID_PHONE_NUMBER;
                    return false;
                }else{
                    phoneNumError.innerHTML='';
                }
            }

            function selectHobbies(){
                const hobbie        = document.querySelector('input[type="checkbox"]:checked');
                const HobbiesError  = document.getElementById("HobbiesError");
                if(hobbie == null){
                    HobbiesError.innerHTML = HOBBIES_REQUIRED;
                }else{
                    HobbiesError.innerHTML='';
                }
            }

function validateForm() {
    const firstName     = document.getElementById("firstName").value;
    const lastName      = document.getElementById("lastName").value;
    const firstNameError= document.getElementById("firstNameError");
    const lastNameError = document.getElementById("lastNameError");
    const email         = document.getElementById("email").value;
    const emailError    = document.getElementById("emailError");   
    const hobbie        = document.querySelector('input[type="checkbox"]:checked');
    const HobbiesError  = document.getElementById("HobbiesError");
    const phoneNum           = document.getElementById("phoneNumber").value;
    const phoneNumError      = document.getElementById("phoneNumberError");
    var showErrorMsg = false;
   
    if (firstName == "") {
        firstNameError.innerHTML = FIRST_NAME_REQUIRED;
        showErrorMsg = true;
    }
     if(lastName == "" ){
        lastNameError.innerHTML = LAST_NAME_REQUIRED;
        showErrorMsg = true;
     }
    
    if(hobbie == null){
        HobbiesError.innerHTML = HOBBIES_REQUIRED;
        showErrorMsg = true;
    }
    if(email == ''){
        emailError.innerHTML = EMAIL_REQUIRED;
        showErrorMsg = true;
    }
    if(phoneNum == ''){
        phoneNumError.innerHTML = PHONE_NUMBER_REQUIRED;
        showErrorMsg = true;
    }
   if(showErrorMsg){
       return false;
     }
}
