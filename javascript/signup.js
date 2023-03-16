$(document).ready(function () {
let users = [];

const signupbtn = $("#submitbtn");
const form1 = document.getElementById("form1");

form1.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullnames = document.getElementById("fullname").value;
    const usernames = document.getElementById("username").value;
    const contacts = document.getElementById("contact").value;
    const emails = document.getElementById("email").value;
    const passwords = document.getElementById("password").value;

    let newuser = {
        fullname: fullnames,
        username: usernames,
        contact: contacts,
        email: emails,
        password: passwords
    };

    // Check if username or email already exists

    var userexists = users.some(function(user){
        return user.username === username || user.email === email;
    });

    if (userexists) {
        alert("This username or email already exists.");
        return;
    }

    users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newuser);

    localStorage.setItem("users", JSON.stringify(users));

    document.getElementById("fullname").value = "";
    document.getElementById("username").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    alert('Your data has been saved.');

    // Display username and password in an alert
    alert(`Username: ${newuser.username}\nPassword: ${newuser.password}\nYour data has been saved.`);
});
});
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}