
let theme = localStorage.getItem("theme");
// create default theme as light

const root = document.documentElement; 
console.log("theme here: ", theme)

  if (theme === "light") {
    // localStorage.setItem("theme", "light");
    theme = "light";
    root.style.setProperty('--dark', '#EDEDFD');
    root.style.setProperty('--darker', '#D2D3DB'); 
    root.style.setProperty('--darkest', '#F6F6FF');
    root.style.setProperty('--white', '#19181e');
    root.style.setProperty('--dark-white', '#19181e');
    root.style.setProperty('--grey', '#999cb4');
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

