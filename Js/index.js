//         let burger = document.getElementById('burger');
//         let mobileLinks = document.getElementById('mobile-links');
//         let burgerLine1 = document.getElementById('burger-line1');
//         let burgerLine2 = document.getElementById('burger-line2');
//         let burgerLine3 = document.getElementById('burger-line3');
//         let filter4 = document.getElementById('filter4');
//         burger.addEventListener('click', ()=>{
          
//           if(mobileLinks.style.display == 'none'){
//           mobileLinks.style.display = 'flex';
//           // burgerLine2.style.opacity = '0%';
//           // burgerLine1.style.rotate='45deg';
//           // burgerLine3.style.rotate = '-45deg';
//           // burgerLine1.style.transform = 'translate(50%)';
//           // burgerLine3.style.transform = 'translate(50%)';
//          }
//          else {
//           mobileLinks.style.display = 'none';
//           burgerLine2.style.opacity = '100%';
//           burgerLine1.style.rotate = '180%';
//           burgerLine3.style.rotate = '180%';
//          }
//         })

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

  alert('wow')
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

  
  // window.alert('Sent!')
  // document.getElementById("contact-form").reset()
  // document.getElementById("thankyou").style.display="block"
  // // document.getElementById("contact-form").style.display="none"
