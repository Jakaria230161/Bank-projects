// step no 1 : add click event handler with the submit button 
document.getElementById("btn-submit").addEventListener("click", function () {
    // step no 2 : GET  the email address inside the input field
    // always remember to sue .value to get text from an input field
    const emailField = document.getElementById("user-email");
    const email = emailField.value;
    // step no 3 : get  password
    // 3.a set id on the html element
    // 3.b get the element
    // 3.c get the value from the element
    const passwordField = document.getElementById("user-password");
    const password = passwordField.value;
    console.log(email, password);

    // Danger : do not verify email or password on the client side
    // step no 4 : verify email and password
    if (email === "sontan@baap.com" && password === "secret") {
        console.log("valid user");
    }
    else {
        console.log("invalid user");
    }

})