let myBtn2 = document.getElementById("gold");
function changeColorToGold() {
    document.getElementsByClassName("color-name")[0].innerHTML = "Color name: Gold";
    document.getElementsByClassName("pic")[0].src = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-gold?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703840519";
}
myBtn2.addEventListener("click", changeColorToGold);

let myBtn1 = document.getElementById("deeppurple");
function changeColorToPurple() {
    document.getElementsByClassName("color-name")[0].innerHTML = "Color name: Deep Purple";
    document.getElementsByClassName("pic")[0].src = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703840578";
}
myBtn1.addEventListener("click", changeColorToPurple);

let myBtn3 = document.getElementById("silver");
function changeColorToSilver() {
    document.getElementsByClassName("color-name")[0].innerHTML = "Color name: Silver";
    document.getElementsByClassName("pic")[0].src = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-silver?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703840488";
}
myBtn3.addEventListener("click", changeColorToSilver);

let myBtn4 = document.getElementById("spaceblack");
function changeColorToSpaceBlack() {
    document.getElementsByClassName("color-name")[0].innerHTML = "Color name: SpaceBlack";
    document.getElementsByClassName("pic")[0].src = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-spaceblack?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703840510";
}
myBtn4.addEventListener("click", changeColorToSpaceBlack);