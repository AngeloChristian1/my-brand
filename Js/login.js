const loginForm = document.getElementById("login-form");
const loginFormEmail = document.getElementById("login-form-email");
const loginFormPassword = document.getElementById("login-form-password");
const loginFormSubmit = document.getElementById("login-form-submit");
const loginFormEmailError = document.getElementById("login-form-email-error");
const loginFormPasswordError = document.getElementById("login-form-password-error");
const errorContainer = document.getElementById("error-container");
const errorElement = document.getElementById("error-text");
const successContainer = document.getElementById("success-container");
const successElement = document.getElementById("success-text");
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^[0-9]{10}$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
const showButton = document.getElementById("visibility")

const timeDelay = (container, element)=>{
    setTimeout(()=>{
      container.style.display = "none";
      element.innerText = "";
    }, 3000)
  }
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
      handleLogin();
    }
  
  })
  

  if(!urlMatch) {
    window.location.replace("../errorPage.html");
  }