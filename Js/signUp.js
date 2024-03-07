const handleSignup = () => {

    let params = {
      name: signupFormName.value,
      email: signupFormEmail.value,
      phone: signupFormPhone.value,
      password: signupFormPassword.value,
      date: `${today}/${month}/${year}`,
      time: `${hours}:${minutes}:${seconds}`,
      role: "user",
      isLoggedIn: false,
      isVerified: false,
      isBlocked: false,    
    }
  
    let allUsers = JSON.parse(localStorage.getItem('users')) || [];
    allUsers.push(params);
    localStorage.setItem('users', JSON.stringify(allUsers));
    console.log('All users:', allUsers);
    signupFormName.value = "";
    signupFormEmail.value = "";
    signupFormPhone.value = "";
    signupFormPassword.value = "";
    successContainer.style.display = "flex",
      successElement.innerHTML = "User Registered successfully"
    timeDelay(successContainer, successElement)
    window.location.href = "../blog/LoginPage.html"; 
  }
  
  signupForm.addEventListener("submit", (e) => {
    let errors = [];
    e.preventDefault();
    
    if (signupFormName.value ==="" || signupFormName.value === null) {
      errors.push("Please enter a valid name");
      signupFormNameError.innerText = "Please enter a valid name";
  
    }else{
      signupFormNameError.innerText = "";
      errorElement.innerText = ""
      errorContainer.style.display = "none"
    }
    if (signupFormEmail.value ==="" || !emailPattern.test(signupFormEmail.value)) {
      errors.push("Please enter a valid email");
      signupFormEmailError.innerText = "Please enter a valid email";
    }
    else{
      signupFormEmailError.innerText = "";
      errorElement.innerText = ""
      errorContainer.style.display = "none"
    }
    if (signupFormPhone.value ==="" || !phonePattern.test(signupFormPhone.value)) {
      errors.push("Please enter a valid phone number");
      signupFormPhoneError.innerText = "Please enter a valid phone number";
    }
    else{
      signupFormPhoneError.innerText = "";
      errorElement.innerText = ""
      errorContainer.style.display = "none"
    }
  
    if (signupFormPassword.value ==="" ) {
      errors.push("Please enter a valid password");
      signupFormPasswordError.innerText = "Please enter a valid password";
    }
   else if (signupFormPassword.value.length < 6) {
      errors.push("Password must be at least 6 characters");
      signupFormPasswordError.innerText = "Password must be at least 6 characters";
    }
    else{
      signupFormPasswordError.innerText = "";
      errorElement.innerText = ""
      errorContainer.style.display = "none"
    }
  
    if (errors.length > 0){
      e.preventDefault();
      errorElement.innerText = errors.join(', ')
      errorContainer.style.display = "flex"
      timeDelay(errorContainer, errorElement)
    }
    if (!errors.length){
    //   handleSignup();
    submitSignup()
    }
  })
  
  const submitSignup = () => {
    let params = {
        name: signupFormName.value,
        email: signupFormEmail.value,
        phone: signupFormPhone.value,
        password: signupFormPassword.value,
        role: "user",   
      }
    fetch('http://localhost:8080/auth/register', {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        successContainer.style.display = "flex",
        successElement.innerHTML = "User Registered successfully"
      timeDelay(successContainer, successElement)
      setTimeout(()=>{
        window.location.href = "../blog/LoginPage.html"; 
      }, 4000)
      
    })
    .catch(error => {
        console.error('Error:', error);
    });
};