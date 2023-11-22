const Burgerbtn = document.querySelector(".burger__btn");
const Headernav = document.querySelector(".header__nav");
    Burgerbtn.addEventListener("click", () => {
        Burgerbtn.classList.toggle("open");
        Headernav.classList.toggle("open");
    });