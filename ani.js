const hamMenu = document.querySelector(".ham_menu");
const openMenu = document.querySelector(".open_menu");
var check = false;
const nameContainer = document.querySelector(".flex-container-name");

hamMenu.addEventListener("click", () => {
    if(check === false) {
        hamMenu.classList.toggle("active");
        openMenu.classList.toggle("active");
        check = true;
    }
})

nameContainer.addEventListener("click", () => {
    if (hamMenu.classList.contains('active') && openMenu.classList.contains('active')) {
        hamMenu.classList.remove('active');
        openMenu.classList.remove('active');
        check = false;
    }
})
