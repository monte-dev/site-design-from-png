const closeBtn = document.querySelector("#closeMenu");
const mobileMenu = document.querySelector("#mobileMenu");
const openBtn = document.querySelector("#openMenu")

openBtn.addEventListener("click", () => {
    if(mobileMenu.classList.contains("expanded")) {
    //    do nothing
       
    }
    else {
        // add class .expanded
        mobileMenu.classList.add('expanded')

    }
})

closeBtn.addEventListener("click", () => {
    // remove class .expanded
    mobileMenu.classList.remove('expanded')
});
