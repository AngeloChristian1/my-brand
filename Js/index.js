        let burger = document.getElementById('burger');
        let mobileLinks = document.getElementById('mobile-links');
        let burgerLine1 = document.getElementById('burger-line1');
        let burgerLine2 = document.getElementById('burger-line2');
        let burgerLine3 = document.getElementById('burger-line3');
        let filter4 = document.getElementById('filter4');
        burger?.addEventListener('click', ()=>{
          
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

const todayDate = new Date();
const today = todayDate.getDate();
const month = todayDate.getMonth();
const year = todayDate.getFullYear();
const hours = todayDate.getHours();
const minutes = todayDate.getMinutes();
const seconds = todayDate.getSeconds();

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
const showButton = document.getElementById("visibility")


// Login form 

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

const loggedUser = JSON.parse(localStorage.getItem("loggedUser")) || null;
// console.log("loggedUser", loggedUser);
const tokens = JSON.parse(localStorage.getItem("tokens"));
      console.log("tokens in index", tokens);

let myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${tokens.bearerToken}`)

let myUrl = `http://localhost:8080/`
// create request object
let request = new Request(`http://localhost:8080/`, {
  method: "GET",
  headers: myHeaders
});