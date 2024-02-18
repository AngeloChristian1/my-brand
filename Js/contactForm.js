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
      // sendMail();
    }
  
    if (messages.length > 0){
      e.preventDefault();
      errorElement.innerText = messages.join(', ')
      errorContainer.style.display = "flex"
    }
    // sendMail();
  })
  