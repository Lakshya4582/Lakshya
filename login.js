 $(document).ready(function () {

    let users = JSON.parse(localStorage.getItem("users"));        
    $('form').submit(function (event) {
        event.preventDefault();       
        if (users) {
                let uname = users.find((u) => u.username == usernames.value && passwords.value == u.password);
                if(uname){                
                    alert("Login Successful");
                    window.location.href = "ticket.html";
                }
                else
                {
                    alert('Username and password are incorrect!');
                }
        }else
        {
            console.log("users object not found in local storage");
        }
    })
 });
