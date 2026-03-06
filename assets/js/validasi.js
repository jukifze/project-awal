document.getElementById("loginForm").addEventListener("submit", function(e){

e.preventDefault();

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

if(email === "" || password === ""){
    alert("Email dan Password harus diisi!");
    return;
}



alert("Login berhasil!");

window.location.href = "profile.html";

});