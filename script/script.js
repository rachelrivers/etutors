console.log('hello');


var banner = document.getElementById("header__heading-covid--fixed");
console.log(banner);

var bannerClose = document.getElementsByClassName("fas fa-times")[0];

console.log(bannerClose);

bannerClose.addEventListener('click', hideBanner);

function hideBanner () {
    banner.classList.add("hide-covid");
}
