function add_user(e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var cnt = document.getElementById("contact").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    if (name == "" || cnt == "" || email == "" || pass == "") {
        alert("You have left some Sign Up field empty");
    } else {
        let users = {
            name,
            cnt,
            email,
            pass
        }
        let arr;
        arr = localStorage.getItem('members');
        if (arr == null) {
            arr = [];
        } else {
            arr = JSON.parse(localStorage.getItem('members'));
        }
        arr.push(users);
        localStorage.setItem('members', JSON.stringify(arr));
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