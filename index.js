 let track = document.getElementById("hero-track")
let slides = document.querySelectorAll('.hero-slide');
let dots = document.querySelectorAll('.dot');
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');
let currentSlide = 0;

function showSlide(index) {
    
    currentSlide = index;
    track.style.transform = `translateX(-${currentSlide * 33.333333}%)`
        
    slides.forEach((slide) =>{
        slide.classList.remove("active");
    });
    slides[index].classList.add("active");

    dots.forEach((dot) =>{
        dot.classList.remove("active")
    });
    dots[index].classList.add("active")

}
nextBtn.addEventListener("click", ()=>{
        currentSlide++;
        if (currentSlide >= slides.length){
            currentSlide = 0;
        }
        showSlide(currentSlide)
    });
prevBtn.addEventListener("click", () =>{
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide)
});
dots.forEach((dot, index) =>{
    dot.addEventListener("click", () => {
        currentSlide = index;
        showSlide(currentSlide)
    });
});
setInterval(() => {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0
    }
    showSlide(currentSlide)
}, 5000);
showSlide(currentSlide)
        
// MOBILE MENU TOGGLE
let btnMenu = document.querySelector('.btn-menu');
let menuDropdown = document.querySelector('.btn-menu .menu');

btnMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    menuDropdown.classList.toggle('open');
});

document.addEventListener('click', (e) => {
    if (!btnMenu.contains(e.target)) {
        menuDropdown.classList.remove('open');
    }
});
function updateCartCount() {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    let cartCount =
        document.getElementById("cart-count");

    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

updateCartCount();