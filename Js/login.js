
showButton.addEventListener('click',()=>{
  if (showButton.innerHTML=== "visibility"){
    showButton.innerHTML="visibility_off"
    loginFormPassword.type ="password"
  }
  else{
    showButton.innerHTML="visibility"
    loginFormPassword.type ="text"
  }
  
})
const handleLogin = ()=>{
    const email = loginFormEmail.value;
    const password = loginFormPassword.value;
    const user = {email, password};
    console.log(user);
    // get users from local storage
    const allUsers = JSON.parse(localStorage.getItem("users"))
    // check if user email is among the registered users
    const userExists = allUsers.find(u => u.email === email);
    
    if(!userExists){
      errorElement.innerText = "User does not exist"
      errorContainer.style.display = "flex"
      timeDelay(errorContainer, errorElement)
    }else{
      // check if password is correct
      if(userExists.password !== password){
        errorElement.innerText = "Incorrect password"
        errorContainer.style.display = "flex"
        timeDelay(errorContainer, errorElement)
 
      }else{
        //change user isloggedin from local storage to true
        userExists.isLoggedIn = true;
        console.log("userExist", userExists)
        localStorage.setItem('users',JSON.stringify(allUsers));
        localStorage.setItem('loggedUser',JSON.stringify(userExists));
        
        successElement.innerText="Successfully logged in!"

        successElement.innerText = "Login, successfull"
        successContainer.style.display = "flex"
        timeDelay(successContainer, successElement)
        // check if user role is admin and redirect to dashboard
        if(userExists.role === "admin"){
          window.location.href = "../dashboard/dashboard.html";
        }
        else{
          window.location.href = "../blog/blog-homepage.html";  
        }
        
      }
    }
}

  loginForm.addEventListener("submit", (e) => {
    let errors = [];
    e.preventDefault();
    
    if (loginFormEmail.value ==="" || !emailPattern.test(loginFormEmail.value)) {
      errors.push("Please enter a valid email");
      loginFormEmailError.innerText = "Please enter a valid email";
    }
    else{
      loginFormEmailError.innerText = "";
      errorElement.innerText = ""
      errorContainer.style.display = "none"
    }
  
    if (loginFormPassword.value ==="" ) {
      errors.push("Please enter a valid password");
      loginFormPasswordError.innerText = "Please enter a valid password";
    }
   else if (loginFormPassword.value.length < 6) {
      errors.push("Password must be at least 6 characters");
      loginFormPasswordError.innerText = "Password must be at least 6 characters";
    }
    else{
      loginFormPasswordError.innerText = "";
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
      // handleLogin();
      submitLogin()
    }
  
  })
  

  showButton.addEventListener('click',()=>{
    if (showButton.innerHTML=== "visibility"){
      showButton.innerHTML="visibility_off"
      signupFormPassword.type ="password"
    }
    else{
      showButton.innerHTML="visibility"
      signupFormPassword.type ="text"
    }
    
  })

     
  const submitLogin = () => {
    let params = {
       email : loginFormEmail.value,
       password : loginFormPassword.value
      }
    fetch('http://localhost:8080/auth/login',{
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);

      if (data.status === "success" || data.status === "successful") {
        localStorage.setItem("loggedUser", JSON.stringify(data?.data));
        localStorage.setItem("tokens", JSON.stringify(data?.tokens));
        (successContainer.style.display = "flex"),
          (successElement.innerHTML = "User Loggin successful");
        timeDelay(successContainer, successElement);
        setTimeout(() => {
          if (data.data.role === "admin") {
            window.location.href = "../dashboard/dashboard.html";
          } else if (data.data.role === "user") {
            window.location.href = "../blog/blog-homepage.html";
          } else {
            errorElement.innerText = data.message;
            errorContainer.style.display = "flex";
            timeDelay(errorContainer, errorElement);
          }
        }, 3000);
      } else {
      }
    })
    .catch(error => {
        console.error('Error:', error);
    });
};