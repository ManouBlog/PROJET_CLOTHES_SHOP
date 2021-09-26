let btn = document.getElementsByClassName("btn")[0];
let list_menu = document.getElementById("liste_menu");
let btn_prev = document.getElementsByClassName("prev")[0];
let btn_next =document.getElementsByClassName("next")[0
];
let ferme = document.getElementsByClassName("close")[0];
let slider = document.getElementById("slider");

btn.addEventListener("click",function () {
    list_menu.classList.add("show");
})

ferme.addEventListener("click",function () {
    list_menu.classList.remove("show");
})
btn_next.addEventListener("click",function () {
    slider.style.left="0";
})
btn_prev.addEventListener("click",function () {
    slider.style.left="-100%";
})
