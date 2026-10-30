document.getElementById("studentForm").addEventListener("submit", function(event) {

    event.preventDefault(); // Prevent form submission

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let regno = document.getElementById("regno").value;
    let department = document.getElementById("department").value;
    let gender = document.getElementById("gender").value;

    let message = document.getElementById("message");

    if(name === "" || email === "" || regno === "" || department === "" || gender === "") {
        message.innerHTML = "Please fill in all fields!";
        message.style.color = "red";
    } else {
        message.innerHTML = "Registration Successful! Welcome, " + name;
        message.style.color = "green";
    }
});