
$(document).ready(function(){
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

    $("#firstName").blur(function(){
      var firstName = $("#firstName").val();
      $("#firstNameError").html('');
        if(firstName == ''){
            $("#firstNameError").html(FIRST_NAME_REQUIRED);
        }else if(firstName.length <2){
            $("#firstNameError").html(FIRST_NAME_LENGTH);
        }
    });
    $("#lastName").blur(function(){
        var lastName = $("#lastName").val();
        $("#lastNameError").html('');
          if(lastName == ''){
              $("#lastNameError").html(LAST_NAME_REQUIRED);
          }else if(lastName.length <2){
              $("#lastNameError").html(LAST_NAME_LENGTH);
          }
      });

      $('.hobbie').click (function (){
        var hobby = document.querySelector('input[type="checkbox"]:checked');
        $("#HobbiesError").html('');
          if(hobby == null){
              $("#HobbiesError").html(HOBBIES_REQUIRED);
          }
      });

      $("#email").blur(function(){
        var email = $("#email").val();
        $("#emailError").html('');
          if(email == ''){
              $("#emailError").html(EMAIL_REQUIRED);
          }else if(!email.match(EMAIL_REGEX)){
              $("#emailError").html(INVALID_EMAIL_ADDRESS);
          }
      });
      $("#phoneNumber").blur(function(){
        var phoneNumber = $("#phoneNumber").val();
        $("#phoneNumberError").html('');
          if(phoneNumber == ''){
              $("#phoneNumberError").html(PHONE_NUMBER_REQUIRED);
          }else if(!phoneNumber.match(PHONE_REGEX)){
              $("#phoneNumberError").html(INVALID_PHONE_NUMBER);
          }
      });
      $( "#registationForm" ).submit(function(event) {
             
             var formErrorExist =false
          if (!$('#firstName').val()) {
              $("#firstNameError").html(FIRST_NAME_REQUIRED);
              formErrorExist =true;
          }
    
          if (!$('#lastName').val()) {
              $("#lastNameError").html(LAST_NAME_REQUIRED);
              formErrorExist =true;
          }
          if ( !document.querySelectorAll('input[type="checkbox"]:checked')) {
              $("#HobbiesError").html(HOBBIES_REQUIRED);
              formErrorExist =true;
          }
          if (!$('#email').val()) {
              $("#emailError").html(EMAIL_REQUIRED);
              formErrorExist =true;
          }
          if (!$('#phoneNumber').val()) {
              $("#phoneNumberError").html(PHONE_NUMBER_REQUIRED);
              formErrorExist =true;
          }
          if(formErrorExist){
                event.preventDefault();
          }
    });
  });
