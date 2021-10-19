$(document).ready(function(){
    const root = $("#root");
    root.append("<ul id='list'></ul>");
    $('#addHobby').click(function(){
        $("#error-msg").html('');
        const hobby = $("#hobby").val();
            if(hobby ==""){
                $("#error-msg").append("<span> Please enter your Hobby </span>");
                return;
            }
        $('#list').append("<li>"+hobby+"</li>");
        $("#hobby").val('');
        
    })
   
});
