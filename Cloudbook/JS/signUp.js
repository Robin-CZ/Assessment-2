SUP = "https://prod-83.eastus.logic.azure.com:443/workflows/3e3d902a36c44b4cbdafae434043f0e6/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=AIYhOVKWS_3eMKfyOTQO-tGQqZr_Kh5YyIsPEClNZvk";

$(document).ready(function() {
    $("#signUpForm").click(function(){
        signUp();    
    }); 
});
function signUp(){
    var submitDetails = {
        email: $('#username').val(),
        username: $('#email').val(),
        password: $('#password').val()
    }
    $.post({
        url: SUP,
        data: submitDetails,
        
        
})(function (response) {
signUp(); 
});
}