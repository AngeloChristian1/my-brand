let themeButton = document.querySelector('#theme-button');
let themeIcon = document.querySelector('#theme-icon');
let logoImage = document.querySelector('#logo-image');
let theme = localStorage.getItem("theme");
// create default theme as light

const root = document.documentElement; 
console.log("theme here: ", theme)

  if (theme === "light") {
    // localStorage.setItem("theme", "light");
    theme = "light";
    root.style.setProperty('--dark', '#9394A5');
    root.style.setProperty('--darker', '#D2D3DB'); 
    root.style.setProperty('--darkest', '#E4E5F1');
    root.style.setProperty('--white', '#19181e');
    root.style.setProperty('--dark-white', '#19181e');
    root.style.setProperty('--grey', '#23202a');
    console.log("theme in light", theme)

  } else {
    // localStorage.setItem("theme", "dark");
    theme = "dark";
    root.style.setProperty('--dark', '#23202a');
    root.style.setProperty('--darker', '#1e1b24');
    root.style.setProperty('--darkest', '#19181e');
    root.style.setProperty('--white', '#ffffff');
    root.style.setProperty('--grey', '#999cb4');
    root.style.setProperty('--dark-white', '#e6e4e4');
    
  
  }
//   const deleteTheme = ()=>{
  
//     localStorage.removeItem("theme");
// }
// themeButton.addEventListener("click",()=>{
//   deleteTheme();
// })

