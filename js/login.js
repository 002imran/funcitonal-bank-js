
//step-1: add event handler to the submit button 
document.getElementById('btn-submit').addEventListener('click', function(){
    //step-2 get the email address inside the email input field
    const emailInputField = document.getElementById('user-email');
    const email = emailInputField.value;


    //step-3 get the password inside from the password field
    const passwordInputField = document.getElementById('user-password');
    const password = passwordInputField.value;
    

    //to check the user valid or not valid
    //its a worng way to check, its not good practice to check password in client side
    // we always check it server side, only for practice purpuse


    if(email==='sadi@gmail.com' && password ==='1234'){
        window.location.href='bank.html';

    }
    else{
        alert('You are not a valid user')
    }

})




