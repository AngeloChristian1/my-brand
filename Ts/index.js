var burger = document.getElementById('burger');
var mobileLinks = document.getElementById('mobile-links');
var burgerLine1 = document.getElementById('burger-line1');
var burgerLine2 = document.getElementById('burger-line2');
var burgerLine3 = document.getElementById('burger-line3');
var filter4 = document.getElementById('filter4');
burger.addEventListener('click', function () {
    if ((mobileLinks === null || mobileLinks === void 0 ? void 0 : mobileLinks.style.display) === 'none') {
        mobileLinks.style.display = 'flex';
        burgerLine2 === null || burgerLine2 === void 0 ? void 0 : burgerLine2.style.display = 'none';
        burgerLine1 === null || burgerLine1 === void 0 ? void 0 : burgerLine1.style.transform = 'rotate(45deg) translate(25%)';
        burgerLine3 === null || burgerLine3 === void 0 ? void 0 : burgerLine3.style.transform = 'rotate(-45deg) translate(25%)';
    }
    else {
        mobileLinks.style.display = 'none';
        burgerLine2 === null || burgerLine2 === void 0 ? void 0 : burgerLine2.style.display = 'block';
        burgerLine1 === null || burgerLine1 === void 0 ? void 0 : burgerLine1.style.transform = 'rotate(0deg) translate(0%)';
        burgerLine3 === null || burgerLine3 === void 0 ? void 0 : burgerLine3.style.transform = 'rotate(0deg) translate(0%)';
    }
});
function sendMail() {
    var params = {
        name: document.getElementById("contact-form-name").value,
        number: document.getElementById("contact-form-phone").value,
        email: document.getElementById("contact-form-email").value,
        message: document.getElementById("contact-form-message").value
    };
    var serviceID = 'default_service';
    var templateID = 'template_db3vxyi';
    console.log(params);
    emailjs.send(serviceID, templateID, params)
        .then(function (res) {
        document.getElementById("contact-form-name").value = "";
        document.getElementById("contact-form-email").value = "";
        document.getElementById("contact-form-phone").value = "";
        document.getElementById("contact-form-message").value = "";
        console.log(res);
        alert('Message sent');
    })
        .catch(function (err) { return console.log(err); });
}
var todayDate = new Date();
var today = todayDate.getDate();
var month = todayDate.getMonth();
var year = todayDate.getFullYear();
var hours = todayDate.getHours();
var minutes = todayDate.getMinutes();
var seconds = todayDate.getSeconds();
var handleFormSubmit = function () {
    var params = {
        name: document.getElementById("contact-form-name").value,
        email: document.getElementById("contact-form-email").value,
        number: document.getElementById("contact-form-phone").value,
        date: "".concat(today, "/").concat(month, "/").concat(year),
        time: "".concat(hours, ":").concat(minutes, ":").concat(seconds),
        message: document.getElementById("contact-form-message").value
    };
    var allMessages = JSON.parse(localStorage.getItem('messages')) || [];
    allMessages.push(params);
    localStorage.setItem('messages', JSON.stringify(allMessages));
    console.log('User Messages:', allMessages);
    document.getElementById("contact-form-name").value = "";
    document.getElementById("contact-form-email").value = "";
    document.getElementById("contact-form-phone").value = "";
    document.getElementById("contact-form-message").value = "";
};
var contactForm = document.getElementById('contact-form');
var contactName = document.getElementById("contact-form-name");
var contactEmail = document.getElementById("contact-form-email");
var contactPhone = document.getElementById("contact-form-phone");
var contactMessage = document.getElementById("contact-form-message");
var errorContainer = document.getElementById("error-container");
var errorElement = document.getElementById("error-text");
var successContainer = document.getElementById("success-container");
var successElement = document.getElementById("success-text");
var emailError = document.getElementById("contact-form-email-error");
var nameError = document.getElementById("contact-form-name-error");
var messageError = document.getElementById("contact-form-message-error");
var phoneError = document.getElementById("contact-form-phone-error");
var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var phonePattern = /^[0-9]{10}$/;
var namePattern = /^[a-zA-Z]+$/;
// signup form
var signupForm = document.getElementById("signup-form");
var signupFormName = document.getElementById("signup-form-name");
var signupFormEmail = document.getElementById("signup-form-email");
var signupFormPhone = document.getElementById("signup-form-phone");
var signupFormPassword = document.getElementById("signup-form-password");
var signupFormSubmit = document.getElementById("signup-form-submit");
var signupFormNameError = document.getElementById("signup-form-name-error");
var signupFormEmailError = document.getElementById("signup-form-email-error");
var signupFormPhoneError = document.getElementById("signup-form-phone-error");
var signupFormPasswordError = document.getElementById("signup-form-password-error");
var showButton = document.getElementById("visibility");
showButton === null || showButton === void 0 ? void 0 : showButton.addEventListener('click', function () {
    if (showButton.innerHTML === "visibility") {
        showButton.innerHTML = "visibility_off";
        signupFormPassword.type = "password";
    }
    else {
        showButton.innerHTML = "visibility";
        signupFormPassword.type = "text";
    }
});
var timeDelay = function (container, element) {
    setTimeout(function () {
        container.style.display = "none";
        element.innerText = "";
    }, 3000);
};
contactForm === null || contactForm === void 0 ? void 0 : contactForm.addEventListener('submit', function (e) {
    var messages = [];
    e.preventDefault();
    if (!contactName.value.trim()) {
        messages.push('Name is required');
        nameError.style.opacity = '1';
        nameError.style.display = 'block';
        nameError.innerHTML = 'Name is required';
        contactName.style.border = '1px solid red';
    }
    else if (!contactEmail.value.trim()) {
        messages.push('Email is required');
        emailError.style.opacity = '1';
        emailError.style.display = 'block';
        emailError.innerHTML = 'Email is required';
        contactEmail.style.border = '1px solid red';
    }
    else if (!emailPattern.test(contactEmail.value.trim())) {
        messages.push('Invalid Email');
        emailError.style.opacity = '1';
        emailError.style.display = 'block';
        emailError.innerHTML = 'Email is Invalid';
        contactEmail.style.border = '1px solid red';
    }
    else if (!contactPhone.value.trim()) {
        messages.push('Phone number is required');
        phoneError.style.opacity = '1';
        phoneError.style.display = 'block';
        phoneError.innerHTML = 'Phone number is required';
        contactPhone.style.border = '1px solid red';
    }
    else if (!phonePattern.test(contactPhone.value.trim())) {
        messages.push('Phone number is invalid');
        phoneError.style.opacity = '1';
        phoneError.style.display = 'block';
        phoneError.innerHTML = 'Phone number is invalid';
        contactPhone.style.border = '1px solid red';
    }
    else if (!contactMessage.value.trim()) {
        messages.push('Message is required');
        messageError.style.opacity = '1';
        messageError.style.display = '';
    }
});
