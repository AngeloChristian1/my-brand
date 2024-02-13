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
//   window.alert('Please enter')
//   e.event.preventDefault();
//   window.alert(blogContentForm.title)
  
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
      document.document.getElementById("contact-form-name").value = "";
      document.document.getElementById("contact-form-email").value = "";
      document.document.getElementById("contact-form-phone").value = "";
      document.document.getElementById("contact-form-message").value = "";
      console.log(res);
      alert('Message sent')
    }
  ).catch((err)=> console.log(err))
}

const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById("contact-form-name");
const contactEmail = document.getElementById("contact-form-email");
const contactPhone = document.getElementById("contact-form-phone");
const contactMessage = document.getElementById("contact-form-message");
const errorContainer = document.getElementById("error-container");
const errorElement = document.getElementById("error-text");
const emailError = document.getElementById("contact-form-email-error");
const nameError = document.getElementById("contact-form-name-error");
const messageError = document.getElementById("contact-form-message-error");
const phoneError = document.getElementById("contact-form-phone-error");
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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
    sendMail();
  }

  if (messages.length > 0){
    e.preventDefault();
    errorElement.innerText = messages.join(', ')
    errorContainer.style.display = "flex"
  }
  // sendMail();
})


const Validator = () => {
  if (email.length === 0) {
    setEmailError("Email is required");
    setIsLoading(false);
    console.log(emailError);
  } else if (!emailPattern.test(email)) {
    setEmailError("Invalid Email");
    setIsLoading(false);
    console.log(emailError);
  } else if (email.indexOf(" ") >= 0) {
    setEmailError("Email can't contain space");
    setIsLoading(false);
    console.log(emailError);
  } else if (password.length < 6) {
    setPasswordError("Password must be at least 6 characters");
    setIsLoading(false);
    console.log(passwordError);
  } else if (password.indexOf(" ") >= 0) {
    setPasswordError("Password can't contain space");
    setIsLoading(false);
    console.log(passwordError);
  } else {
    setEmailError("");
    setPasswordError("");
    setIsLoading(true);
  }
}