const form = document.getElementById("myForm");

form.addEventListener('submit', function(event){
    event.preventDefault();

    const nameInput = form.elements['name'];
    const emailInput = form.elements['email'];
    const phoneInput = form.elements['phone'];
    const passwordInput = form.elements['password'];
    const confirmPasswordInput = form.elements['confirmPassword'];
    const passwordStrengthRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    let isValid = true;

    // check name input
    if(nameInput.value.length < 3){
        nameInput.setCustomValidity('Name must be atleast three characters');
        isValid = false;
    }else{
        nameInput.setCustomValidity('');
    }

    // check email input
    if(!emailInput.checkValidity()){
        emailInput.setCustomValidity('Invalid Email address');
        isValid = false;
    }else{
        emailInput.setCustomValidity('');
    }
    // check phone input
    if(!phoneInput.checkValidity()){
        phoneInput.setCustomValidity('Invalid phone number (must be in format 0701234567)');
        isValid = false;
    }else{
        phoneInput.setCustomValidity('');
    }
    // check if password is strong
    if(passwordInput.value.length < 8){
        passwordInput.setCustomValidity('Password must be atleast 8 characters');
        isValid = false;
    }
    else if (!passwordStrengthRegex.test(passwordInput.value)) {
        passwordInput.setCustomValidity('Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long.');
        isValid = false;
    }else{
        passwordInput.setCustomValidity('');
    }
    // check password and confirmation match
    if(passwordInput.value !==confirmPasswordInput.value){
        confirmPasswordInput.setCustomValidity('Password do not match');
        isValid = false;
    }else{
        confirmPasswordInput.setCustomValidity('');
    }

    // submit form if valid
    if(isValid){
        form.submit();
    }
});