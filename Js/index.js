        let burger = document.getElementById('burger');
        let mobileLinks = document.getElementById('mobile-links');
        let burgerLine1 = document.getElementById('burger-line1');
        let burgerLine2 = document.getElementById('burger-line2');
        let burgerLine3 = document.getElementById('burger-line3');
        let filter4 = document.getElementById('filter4');
        burger.addEventListener('click', ()=>{
          
          if(mobileLinks.style.display == 'none'){
          mobileLinks.style.display = 'flex';
          burgerLine2.style.display = 'none';
          burgerLine1.style.rotate='45deg';
          burgerLine3.style.rotate = '-45deg';
          burgerLine1.style.transform = 'translate(25%)';
          burgerLine3.style.transform = 'translate(25%)';
         }
         else {
          mobileLinks.style.display = 'none';
          burgerLine2.style.display = 'block';
          burgerLine1.style.rotate = '0deg';
          burgerLine3.style.rotate = '0deg';
          burgerLine1.style.transform = 'translate(0%)';
          burgerLine3.style.transform = 'translate(0%)';
         }
        })

// let blogContentForm = document.getElementById('dashboard-input-information-form')


// blogContentForm.addEventListener('submit', (e)=>{
//   e.event.preventDefault();
  
// })



// let loginForm = document.getElementById("loginForm");

// loginForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let username = document.getElementById("username");
//   let password = document.getElementById("password");

//   if (username.value == "" || password.value == "") {
//     alert("Ensure you input a value in both fields!");
//   } else {
//     // perform operation with form input
//     alert("This form has been successfully submitted!");
//     console.log(
//       `This form has a username of ${username.value} and password of ${password.value}`
//     );

//     username.value = "";
//     password.value = "";
//   }
// });

// // contact form integration
// const contactFormButton = document.getElementById('contact-form-submit-button');

// document.getElementById('contact-form')
//  .addEventListener('submit', function(event) {
//    event.preventDefault();
// window.alert('Enter here')
//    contactFormButton.value = 'Sending...';

//    const serviceID = 'default_service';
//    const templateID = 'template_db3vxyi';

//    emailjs.sendForm(serviceID, templateID, this)
//     .then(() => {
//       contactFormButton.value = 'Send Email';
//       alert('Sent!');
//     }, (err) => {
//       contactFormButton.value = 'Send Email';
//       alert(JSON.stringify(err));
//     });
// });

function sendMail(){
  
  
  let params = {
    name: document.getElementById("contact-form-name").value,
    number: document.getElementById("contact-form-phone").value,
    email: document.getElementById("contact-form-email").value,
    message: document.getElementById("contact-form-message").value
  }

  const serviceID = 'default_service';
   const templateID = 'template_db3vxyi';

  console.log(params)
  emailjs.send(serviceID,templateID, params)
  .then(
    res =>{
      document.getElementById("contact-form-name").value = "";
      document.getElementById("contact-form-email").value = "";
      document.getElementById("contact-form-phone").value = "";
      document.getElementById("contact-form-message").value = "";
      console.log(res);
      alert('Message sent')
    }
  ).catch((err)=> console.log(err))
}

const todayDate = new Date();
const today = todayDate.getDate();
const month = todayDate.getMonth();
const year = todayDate.getFullYear();
const hours = todayDate.getHours();
const minutes = todayDate.getMinutes();
const seconds = todayDate.getSeconds();

const handleFormSubmit = () => {
  let params = {
    name: document.getElementById("contact-form-name").value,
    email: document.getElementById("contact-form-email").value,
    number: document.getElementById("contact-form-phone").value,
    date: `${today}/${month}/${year}`,
    time: `${hours}:${minutes}:${seconds}`,
    message: document.getElementById("contact-form-message").value,
    // indexId : JSON.parse(localStorage.getItem('messages')).length + 1 || 0
  }

  let allMessages = JSON.parse(localStorage.getItem('messages')) || [];
  allMessages.push(params);

  localStorage.setItem('messages', JSON.stringify(allMessages)); // Store the updated array in local storage

  console.log('User Messages:', allMessages);

    console.log('user Messages',allMessages);
    document.getElementById("contact-form-name").value = "";
    document.getElementById("contact-form-email").value = "";
    document.getElementById("contact-form-phone").value = "";
    document.getElementById("contact-form-message").value = "";
}

const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById("contact-form-name");
const contactEmail = document.getElementById("contact-form-email");
const contactPhone = document.getElementById("contact-form-phone");
const contactMessage = document.getElementById("contact-form-message");
const errorContainer = document.getElementById("error-container");
const errorElement = document.getElementById("error-text");
const successContainer = document.getElementById("success-container");
const successElement = document.getElementById("success-text");
const emailError = document.getElementById("contact-form-email-error");
const nameError = document.getElementById("contact-form-name-error");
const messageError = document.getElementById("contact-form-message-error");
const phoneError = document.getElementById("contact-form-phone-error");
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^[0-9]{10}$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
const namePattern = /^[a-zA-Z]+$/;

// signup form
const signupForm = document.getElementById("signup-form");
const signupFormName = document.getElementById("signup-form-name");
const signupFormEmail = document.getElementById("signup-form-email");
const signupFormPhone = document.getElementById("signup-form-phone");
const signupFormPassword = document.getElementById("signup-form-password");
const signupFormSubmit = document.getElementById("signup-form-submit");
const signupFormNameError = document.getElementById("signup-form-name-error");
const signupFormEmailError = document.getElementById("signup-form-email-error");
const signupFormPhoneError = document.getElementById("signup-form-phone-error");
const signupFormPasswordError = document.getElementById("signup-form-password-error");

// login form
const loginForm = document.getElementById("login-form");
const loginFormEmail = document.getElementById("login-form-email");
const loginFormPassword = document.getElementById("login-form-password");
const loginFormSubmit = document.getElementById("login-form-submit");
const loginFormEmailError = document.getElementById("login-form-email-error");
const loginFormPasswordError = document.getElementById("login-form-password-error");


const timeDelay = (container, element)=>{
  setTimeout(()=>{
    container.style.display = "none";
    element.innerText = "";
  }, 3000)
}

contactForm.addEventListener('submit', (e)=>{
  let messages = []
 
  e.preventDefault();
  if (contactName.value === '' || contactName.value == null){
    messages.push('Name is required')
    nameError.style.opacity = '1';
    nameError.style.display = 'block';
    nameError.innerHTML = 'Name is required';
    contactName.style.border = '1px solid red';
  }

  else  if (contactEmail.value === '' || contactEmail.value == null){
    nameError.innerHTML = '';
    contactName.style.border = 'none';
    messages.push('Email is required')
    emailError.style.opacity = '1';
    emailError.style.display = 'block';
    emailError.innerHTML = 'Email is required';
    contactEmail.style.border = '1px solid red';
  }
  else if (!emailPattern.test(contactEmail.value)){
    messages.push('Invalid Email')
    emailError.style.opacity = '1';
    emailError.style.display = 'block';
    emailError.innerHTML = 'Email is Invalid';
    contactEmail.style.border = '1px solid red';
  }

  else if (contactEmail.value.indexOf(" ") >= 0){
    messages.push('Email can\'t contain space')
    emailError.style.opacity = '1';
    emailError.style.display = 'block';
    emailError.innerHTML = 'Email can\'t contain space';
    contactEmail.style.border = '1px solid red';
  }

  else if (contactPhone.value === '' || contactPhone.value == null){
    emailError.innerHTML = '';
    contactEmail.style.border = 'none';
    messages.push('Phone number is required')
    phoneError.style.opacity = '1';
    phoneError.style.display = 'block';
    phoneError.innerHTML = 'Phone number is required';
    contactPhone.style.border = '1px solid red';
  }

  else if (contactPhone.value.length < 10){
    messages.push('Phone number is too short')
    phoneError.style.opacity = '1';
    phoneError.style.display = 'block';
    phoneError.innerHTML = 'Phone number is too short';
    contactPhone.style.border = '1px solid red';
    
  }
  else if (contactPhone.value.length > 11){
    messages.push('Phone number is too long')
    phoneError.style.opacity = '1';
    phoneError.style.display = 'block';
    phoneError.innerHTML = 'Phone number is too long';
    contactPhone.style.border = '1px solid red';
    
  }
  else if (contactPhone.value.indexOf(" ") >= 0){
    messages.push('Phone number can\'t contain space')
    phoneError.style.opacity = '1';
    phoneError.style.display = 'block';
    phoneError.innerHTML = 'Phone number can not contain space';
    contactPhone.style.border = '1px solid red';
  }
 
  else if (contactMessage.value === '' || contactMessage.value == null){
    phoneError.innerHTML = '';
    contactPhone.style.border = 'none';
    messages.push('Message is required')
    messageError.style.opacity = '1';
    messageError.style.display = 'block';
    messageError.innerHTML = 'Message is required';
    contactMessage.style.border = '1px solid red';
  }
   else {
    e.preventDefault();
    errorContainer.style.display = "none"
    errorElement.innerText = ""
    phoneError.innerHTML = '';
    emailError.innerHTML = '';
    nameError.innerHTML = '';
    messageError.innerHTML = '';
    contactMessage.style.border = 'none';
    contactPhone.style.border = 'none';
    contactEmail.style.border = 'none';
    contactName.style.border = 'none';
    successElement.innerText = "Form submitted";
    successContainer.style.display = "flex";
    
    setTimeout(() => {
      successContainer.style.display = "none";
      successElement.innerText = "";
    }, 2000);
    handleFormSubmit();
    sendMail();
  }

  if (messages.length > 0){
    e.preventDefault();
    errorElement.innerText = messages.join(', ')
    errorContainer.style.display = "flex"
  }
  // sendMail();
})



// signup form submit

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
    handleSignup();
  }

})
