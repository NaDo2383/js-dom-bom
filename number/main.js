let a = Math.floor(Math.random() * 20 + 1), b;


function store_value() {
    b = document.getElementsByClassName("guess")[0].value;
    let c = document.getElementsByClassName("score")[0].innerHTML;
    if (b > 0 && b <= 20) {
        if (c > 0) {
            if (b > a) {
                document.getElementById("message").innerHTML = "Их байна!";
                document.getElementsByClassName("score")[0].innerHTML = document.getElementsByClassName("score")[0].innerHTML - 1;
            } else if (b < a) {
                document.getElementById("message").innerHTML = "Бага байна!";
                document.getElementsByClassName("score")[0].innerHTML = document.getElementsByClassName("score")[0].innerHTML - 1;
            } else {
                document.getElementById("message").innerHTML = "Зөв таалаа!";
                document.getElementById("message").style.backgroundColor = "#60b347";
            }
        } else if (c == 0) {
            alert("Та хожигдлоо")
        } else { }
    } else {
        alert("Та 1-ээс 20-н хооронд тоо оруулна уу");
    }

}

function startNew() {
    document.getElementsByClassName("highscore")[0].innerHTML = 20 - document.getElementsByClassName("score")[0].innerHTML;
    document.getElementsByClassName("score")[0].innerHTML = 20;
    a = Math.floor(Math.random() * 20 + 1);
    document.getElementById("message").style.backgroundColor = "#222"
    document.getElementById("message").innerHTML = "Тааж эхлээрэй..."
}
let btnCheck = document.getElementsByClassName("btnCheck")[0];
let btnStart = document.getElementsByClassName("btn again")[0];
btnCheck.addEventListener("click", store_value);
btnStart.addEventListener("click", startNew);
