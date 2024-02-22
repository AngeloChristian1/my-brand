const errorContainer = document.getElementById("error-container");
const errorElement = document.getElementById("error-text");
const successContainer = document.getElementById("success-container");
const successElement = document.getElementById("success-text");

const timeDelay = (container, element)=>{
    setTimeout(()=>{
      container.style.display = "none";
      element.innerText = "";
    }, 3000)
  }

