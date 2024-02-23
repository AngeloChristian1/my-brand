
import 'dom'

const burger = document.getElementById('burger') as HTMLElement;
const mobileLinks = document.getElementById('mobile-links') as HTMLElement;
const burgerLine1 = document.getElementById('burger-line1') as HTMLElement;
const burgerLine2 = document.getElementById('burger-line2') as HTMLElement;
const burgerLine3 = document.getElementById('burger-line3') as HTMLElement;
const filter4 = document.getElementById('filter4');

burger.addEventListener('click', () => {
    if (mobileLinks?.style.display === 'none') {
        mobileLinks.style.display = 'flex';

    } else {
        mobileLinks.style.display = 'none';
    }
});

function sendMail() {
    const params = {
        name: (document.getElementById("contact-form-name") as HTMLInputElement).value,
        number: (document.getElementById("contact-form-phone") as HTMLInputElement).value,
        email: (document.getElementById("contact-form-email") as HTMLInputElement).value,
        message: (document.getElementById("contact-form-message") as HTMLInputElement).value
    };

    const serviceID = 'default_service';
    const templateID = 'template_db3vxyi';

    console.log(params);
    emailjs.send(serviceID, templateID, params)
        .then(res => {
            (document.getElementById("contact-form-name") as HTMLInputElement).value = "";
            (document.getElementById("contact-form-email") as HTMLInputElement).value = "";
            (document.getElementById("contact-form-phone") as HTMLInputElement).value = "";
            (document.getElementById("contact-form-message") as HTMLInputElement).value = "";
            console.log(res);
            alert('Message sent');
        })
        .catch(err => console.log(err));
}

const todayDate = new Date();
const today = todayDate.getDate();
const month = todayDate.getMonth();
const year = todayDate.getFullYear();
const hours = todayDate.getHours();
const minutes = todayDate.getMinutes();
const seconds = todayDate.getSeconds();

const handleFormSubmit = () => {
    const params = {
        name: (document.getElementById("contact-form-name") as HTMLInputElement).value,
        email: (document.getElementById("contact-form-email") as HTMLInputElement).value,
        number: (document.getElementById("contact-form-phone") as HTMLInputElement).value,
        date: `${today}/${month}/${year}`,
        time: `${hours}:${minutes}:${seconds}`,
        message: (document.getElementById("contact-form-message") as HTMLInputElement).value
    };

    const allMessages: any[] = JSON.parse(localStorage.getItem('messages')) || [];
    allMessages.push(params);

    localStorage.setItem('messages', JSON.stringify(allMessages));
    console.log('User Messages:', allMessages);

    (document.getElementById("contact-form-name") as HTMLInputElement).value = "";
    (document.getElementById("contact-form-email") as HTMLInputElement).value = "";
    (document.getElementById("contact-form-phone") as HTMLInputElement).value = "";
    (document.getElementById("contact-form-message") as HTMLInputElement).value = "";
};

const contactForm = document.getElementById('contact-form') as HTMLFormElement;
const contactName = document.getElementById("contact-form-name") as HTMLInputElement;
const contactEmail = document.getElementById("contact-form-email") as HTMLInputElement;
const contactPhone = document.getElementById("contact-form-phone") as HTMLInputElement;
const contactMessage = document.getElementById("contact-form-message") as HTMLInputElement;
const errorContainer = document.getElementById("error-container") as HTMLElement;
const errorElement = document.getElementById("error-text");
const successContainer = document.getElementById("success-container");
const successElement = document.getElementById("success-text");
const emailError = document.getElementById("contact-form-email-error");
const nameError = document.getElementById("contact-form-name-error");
const messageError = document.getElementById("contact-form-message-error");
const phoneError = document.getElementById("contact-form-phone-error");
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^[0-9]{10}$/;
const namePattern = /^[a-zA-Z]+$/;

// signup form
const signupForm = document.getElementById("signup-form") as HTMLFormElement;
const signupFormName = document.getElementById("signup-form-name") as HTMLInputElement;
const signupFormEmail = document.getElementById("signup-form-email") as HTMLInputElement;
const signupFormPhone = document.getElementById("signup-form-phone") as HTMLInputElement;
const signupFormPassword = document.getElementById("signup-form-password") as HTMLInputElement;
const signupFormSubmit = document.getElementById("signup-form-submit");
const signupFormNameError = document.getElementById("signup-form-name-error");
const signupFormEmailError = document.getElementById("signup-form-email-error");
const signupFormPhoneError = document.getElementById("signup-form-phone-error");
const signupFormPasswordError = document.getElementById("signup-form-password-error");
const showButton = document.getElementById("visibility");

showButton?.addEventListener('click', () => {
    if (showButton.innerHTML === "visibility") {
        showButton.innerHTML = "visibility_off";
        signupFormPassword.type = "password";
    } else {
        showButton.innerHTML = "visibility";
        signupFormPassword.type = "text";
    }
});

const timeDelay = (container: HTMLElement, element: HTMLElement) => {
    setTimeout(() => {
        container.style.display = "none";
        element.innerText = "";
    }, 3000);
};

contactForm?.addEventListener('submit', (e) => {
    const messages: string[] = [];

    e.preventDefault();
    if (!contactName.value.trim()) {
        messages.push('Name is required');
        nameError.style.opacity = '1';
        nameError.style.display = 'block';
        nameError.innerHTML = 'Name is required';
        contactName.style.border = '1px solid red';
    } else if (!contactEmail.value.trim()) {
        messages.push('Email is required');
        emailError.style.opacity = '1';
        emailError.style.display = 'block';
        emailError.innerHTML = 'Email is required';
        contactEmail.style.border = '1px solid red';
    } else if (!emailPattern.test(contactEmail.value.trim())) {
        messages.push('Invalid Email');
        emailError.style.opacity = '1';
        emailError.style.display = 'block';
        emailError.innerHTML = 'Email is Invalid';
        contactEmail.style.border = '1px solid red';
    } else if (!contactPhone.value.trim()) {
        messages.push('Phone number is required');
        phoneError.style.opacity = '1';
        phoneError.style.display = 'block';
        phoneError.innerHTML = 'Phone number is required';
        contactPhone.style.border = '1px solid red';
    } else if (!phonePattern.test(contactPhone.value.trim())) {
        messages.push('Phone number is invalid');
        phoneError.style.opacity = '1';
        phoneError.style.display = 'block';
        phoneError.innerHTML = 'Phone number is invalid';
        contactPhone.style.border = '1px solid red';
    } else if (!contactMessage.value.trim()) {
        messages.push('Message is required');
        messageError.style.opacity = '1';
        messageError.style.display =