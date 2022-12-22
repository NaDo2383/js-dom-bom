//task1
let btn = document.querySelector("input");
let list = document.querySelectorAll("option");
let arr = ["bhgjk", "gvbhjn", "vghbjnmk", "vvghbjn"]
function removeElement() {
    for (let i = 0; i < list.length; i++) {
        if (list[i].selected) {
            list[i].remove()
        }
    }
}

btn.addEventListener("click", removeElement);   