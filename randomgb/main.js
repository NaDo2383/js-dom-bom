let r, g, b;
function randombg() {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    document.querySelectorAll("body")[0].style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
}

let btn = document.querySelectorAll("#btn")[0];

btn.addEventListener("click", randombg);
