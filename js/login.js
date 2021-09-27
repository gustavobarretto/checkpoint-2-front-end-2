// Get the name from the login's form
const form = document.forms.login;
const { username } = form;

document.querySelector("button").addEventListener("click", () => {

    localStorage.setItem("user", JSON.stringify(username.value));    
});


