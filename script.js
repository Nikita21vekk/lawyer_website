const servic = document.querySelector(".servic__title");
const burger = document.querySelector(".burger");
let slider = 1;

// Кнопка наши услигу
document.querySelector("#home__btn").addEventListener("click", () => {
    servic.scrollIntoView({behavior: 'smooth'});
})
// Бургер
document.querySelector(".burger__img-open").addEventListener("click", () => {
    burger.style = "display: block"
    document.getElementsByTagName("body")[0].style = "overflow: hidden !important";
})
document.querySelector(".burger__close").addEventListener("click", () => {
    burger.style = "display: none"
    document.getElementsByTagName("body")[0].style = "overflow: visible !important";
})

// Слайдер
function onSlider() {
    if (slider == 1) {
        document.querySelector("#Bullet1").style = "background-color: #4F8FF0; height: 40px;";
        document.querySelector("#Bullet2").style = "background-color: #fff;";
        document.querySelector("#Bullet3").style = "background-color: #fff;";
        document.querySelector(".home").style = "background-image: url('../img/bg.webp')";
    } else if (slider == 2) {
        document.querySelector("#Bullet1").style = "background-color: #fff;";
        document.querySelector("#Bullet2").style = "background-color: #4F8FF0; height: 40px;";
        document.querySelector("#Bullet3").style = "background-color: #fff;";
        document.querySelector(".home").style = "background-image: url('../img/slider2.webp')";
    }else if (slider == 3) {
        document.querySelector("#Bullet1").style = "background-color: #fff;";
        document.querySelector("#Bullet2").style = "background-color: #fff;";
        document.querySelector("#Bullet3").style = "background-color: #4F8FF0; height: 40px;";
        document.querySelector(".home").style = "background-image: url('../img/book.webp')";
    }
}
onSlider()
document.querySelector("#Bullet1").addEventListener("click", () => {
    slider = 1;
    onSlider()
    
})
document.querySelector("#Bullet2").addEventListener("click", () => {
    slider = 2;
    onSlider()
})
document.querySelector("#Bullet3").addEventListener("click", () => {
    slider = 3;
    onSlider()
})
document.querySelector("#arrowleft").addEventListener("click", () => {
    if (slider != 1) {
        slider -= 1;
        onSlider()
    } else {
        slider = 3;
        onSlider()
    }
})
document.querySelector("#arrowright").addEventListener("click", () => {
    if (slider < 3) {
        slider += 1;
        onSlider()
    } else {
        slider = 1;
        onSlider()
    }
})