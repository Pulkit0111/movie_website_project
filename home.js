var i = 0;
function slideShow() {
    let banner = [
    "https://www.teahub.io/photos/full/67-670663_hollywood-movie-poster-hd.jpg",
    "http://pavbca.com/walldb/original/b/d/b/721224.jpg",
    "https://wallpapercave.com/wp/jCDL6OV.jpg",
    ];
    let parent = document.getElementById("parent");
    let div = document.createElement("div");
    parent.append(div);
    div.setAttribute("class", "imgCont");
    let img = document.createElement("img");
    setInterval(function () {
        if (i == banner.length) {
            i = 0;
        }
        img.src = banner[i];
        i++;
    }, 2000);
    div.append(img);
}
slideShow();

function showMovies(data) {
    let movies = [
        {
            name: "Avatar",
            release: "2009",
            poster: "https://live.staticflickr.com/4085/4847267571_741cb3e02a_c.jpg",
            rating: 7.8
        },
        {
            name: "Dunkirk",
            release: "2017",
            poster: "https://m.media-amazon.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg",
            rating: 7.9
        },
        {
            name: "Endgame",
            release: "2019",
            poster: "https://cdn.europosters.eu/image/750/posters/avengers-endgame-journey-s-end-i73600.jpg",
            rating: 8.6
        },
        {
            name: "Inception",
            release: "2010",
            poster: "https://images-na.ssl-images-amazon.com/images/I/7106uLYY2LL._AC_SL1111_.jpg",
            rating: 8.4
        },
        {
            name: "Infinity War",
            release: "2018",
            poster: "https://cdn.europosters.eu/image/750/posters/avengers-infinity-war-one-sheet-i58560.jpg",
            rating: 8.5
        },
        {
            name: "Interstellar",
            release: "2014",
            poster: "https://images-na.ssl-images-amazon.com/images/I/81kz06oSUeL._AC_SL1500_.jpg",
            rating: 8.7
        },
        {
            name: "Black Panther",
            release: "2009",
            poster: "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2018/01/DUuhmrbXUAAGF1c.jpg",
            rating: "7.8"
        },
        {
            name: "Schindler's List",
            release: "2018",
            poster: "https://images-na.ssl-images-amazon.com/images/I/515qyYBSIFL._AC_.jpg",
            rating: 7.3
        },
        {
            name: "Shawshank Redemption",
            release: "1994",
            poster: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY1200_CR89,0,630,1200_AL_.jpg",
            rating: 9.3
        }
    ];
    if (localStorage.getItem('moviesdata') == null) {
        localStorage.setItem('moviesdata', JSON.stringify(movies));
    }
    // let mov_arr = JSON.parse(localStorage.getItem('moviesdata'));
    let movParent = document.getElementById("movParent");
    movParent.innerHTML = null;
    for (var i = 0; i < data.length; i++) {
        let mo_div = document.createElement('div');
        let p_name = document.createElement('p');
        p_name.innerHTML = data[i].name;
        let p_release = document.createElement('p');
        p_release.innerHTML = `Release: ${data[i].release}`;
        let p_rating = document.createElement('p');
        p_rating.innerHTML = `IMDP: ${data[i].rating}`;
        let p_img = document.createElement('img');
        p_img.src = data[i].poster;
        mo_div.append(p_name, p_release, p_rating, p_img);
        movParent.append(mo_div);
    }
}
showMovies(JSON.parse(localStorage.getItem('moviesdata')));

function button() {
    let btn_div = document.createElement('div');
    let btnLH = document.createElement('button');
    btnLH.innerHTML = "Sort Low-High";
    btn_div.append(btnLH);
    btnLH.setAttribute('class', 'btnLH');
    let btnHL = document.createElement('button');
    btnHL.innerHTML = "Sort High-Low";
    btn_div.append(btnHL);
    btnHL.setAttribute('class', 'btnHL');
    let btnParent = document.getElementById('btnParent');
    btnParent.append(btn_div);
    
    function sortLH() {
        let sortedLH = JSON.parse(localStorage.getItem('moviesdata'));
        sortedLH = sortedLH.sort(function (a,b) {
            return a.rating - b.rating;
        });
        // console.log(sortedLH);
        showMovies(sortedLH);
    }
    function sortHL() {
        let sortedHL = JSON.parse(localStorage.getItem('moviesdata'));
        sortedHL = sortedHL.sort(function (a,b) {
            return b.rating - a.rating;
        });
        // console.log(sortedHL);
        showMovies(sortedHL);
    }
    btnLH.addEventListener('click', sortLH);
    btnHL.addEventListener('click', sortHL);
}
button();

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
