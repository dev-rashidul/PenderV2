// JavaScript For Sticky Header 

const bar = document.getElementById("bar");
const nav = document.querySelector(".nav")

bar.addEventListener("click", ()=>{
    bar.classList.toggle("active")
    nav.classList.toggle("active")
})

// JavaScript For Sticky Header Scroll

window.addEventListener("scroll", function(){
    const header = document.querySelector(".navbar");
    header.classList.toggle("sticky", window.scrollY > 100)

})

// Pet Selling Slider JavaScript

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:25,
    responsiveClass:true,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:true
        },
        700:{
            items:2,
            nav:true,
        },
        1000:{
            items:3,
            nav:true,
        },
        1200:{
            items:4,
            nav:true,
        }
    },
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>']
})