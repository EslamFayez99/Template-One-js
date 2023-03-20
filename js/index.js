let toggleBtn = document.querySelector(".navbtn");
let navBar = document.querySelector(".navbar");
let closeNav = document.querySelector(".close");

toggleBtn.onclick = function () {

    navBar.classList.add("active")

};

closeNav.onclick = () => {

    navBar.classList.remove('active');

};


let links = document.querySelectorAll(".navbar li a");

links.forEach(li => {

    li.addEventListener("click", (e) => {

        navBar.classList.remove('active');

    e.target.parentElement.querySelectorAll('.actived').forEach(element => {
        element.classList.remove('actived');
    });
    
    e.target.classList.add('actived');

    });
});
// console.log(links);









let header = document.getElementById("header");
let i = 100;

window.onscroll = function () {

    scrollHeader();

}

function scrollHeader() {

    if(window.scrollY >= i) {

        header.classList.add("bg-header");

    }else{

        header.classList.remove("bg-header");

    }

}



ScrollReveal({
    reset: true,
    distance: '80px',
    duration : 2000,
    delay: 200
});

ScrollReveal().reveal('.main-title,.srvices .info,.slider .text, .box .text, .caption,.main-header,.contact-us .content', {origin: "top"});
ScrollReveal().reveal('.image,.images', {origin: "bottom"});
ScrollReveal().reveal('.slider h2,.footer,.contact .text', {origin: "left"});

// ScrollReveal().reveal('.tagline', { delay: 500 });














// let section = document.querySelectorAll('.main-header');
// let navLink = document.querySelectorAll('.navbar li a');

// window.onscroll = () => {
//     section.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height) {
//             navLink.forEach(links => {
//                 links.classList.remove('actived');
//                 document.querySelector('.header .navbar li a[href*=' + id + ']').classList.add('actived');
//             });
//         };

//     });

// };