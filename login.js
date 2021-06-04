function login(e) {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let arr2 = JSON.parse(localStorage.getItem('members'));
    let isPresent = false; 
    for (let i = 0; i < arr2.length; i++) {
        if (email == arr2[i].email && pass == arr2[i].pass) {
            isPresent = true;
        }
    }
    if (isPresent) {
        window.location.href = "home.html";
    } else {
        alert("Wrong Credentials");
    }
}
function target() {
    let home_btn = document.getElementById('home');
    let login_btn = document.getElementById('login');
    let signup_btn = document.getElementById('signup');
    function home() {
        window.location.href = "index.html";
    }
    function login() {
        window.location.href = "login.html";
    }
    function signup() {
        window.location.href = "signup.html";
    }
    home_btn.addEventListener('click', home);
    login_btn.addEventListener('click', login);
    signup_btn.addEventListener('click', signup);
}
target();