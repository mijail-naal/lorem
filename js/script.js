let blueHeader = document.querySelector('header');
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let blueBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

let infoBtn = document.querySelector('#info-btn');
let infoContent = document.querySelector('.info-container');
let infoClose = document.querySelector('#info-close');


window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}


window.addEventListener('scroll', () => {
    let winTop = window.pageYOffset;

    if (winTop <= 0) {
        blueHeader.classList.remove('blue-header');
        blueBar.classList.remove('blue-bar');
    } else {
        blueHeader.classList.add('blue-header');
        blueBar.classList.add('blue-bar');
    }
})


menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});


searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});


formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});

infoBtn.addEventListener('click', () => {
    infoContent.classList.add('active');
});

infoClose.addEventListener('click', () => {
    infoContent.classList.remove('active');
});


videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    })
})