
const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
console.log("loggedUser", loggedUser);
const tokens = JSON.parse(localStorage.getItem("tokens"));
      console.log("tokens", tokens);

let myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${tokens.bearerToken}`)

let myUrl = `http://localhost:8080/`
// create request object
let request = new Request(`http://localhost:8080/`, {
  method: "GET",
  headers: myHeaders
});