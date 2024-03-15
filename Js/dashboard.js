const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
console.log("loggedUser form dash.js", loggedUser);
const tokens = JSON.parse(localStorage.getItem("tokens"));
console.log("tokens", tokens);

let myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${tokens.bearerToken}`);

let myUrl = `http://localhost:8080/`;
// create request object
let request = new Request(`http://localhost:8080/`, {
  method: "GET",
  headers: myHeaders,
});

// variables

const  userProfileDetails = document.querySelector(".dashboard-user-info")
userProfileDetails.innerHTML = `
<img
src= ${loggedUser.profile || "../assets/images/profile-default.png"} alt="Profile Picture" 
class="avatar"
/>
<div>
<p class="white-text small-text title">${loggedUser.name}</p>
<p class="grey-text small-text">${loggedUser.role}</p>
</div>`

userProfileDetails.addEventListener("click", ()=>{
  window.location.href="../dashboard/dashboard-profile.html"
})