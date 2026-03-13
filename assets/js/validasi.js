document.getElementById("loginForm").addEventListener("submit", function(e){

    e.preventDefault(); // supaya tidak reload

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "w" && password === "w"){
        alert("Login berhasil!");
        window.location.href = "index.html"; // pindah ke halaman utama
    } else {
        alert("Username atau password salah");
    }

});