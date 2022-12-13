//task1
let list = document.querySelectorAll("option"), btn = document.querySelector("input");
function removeElement() {
    for (let i = 0; i < list.length; i++) {
        if (list[i].selected) {
            list.removeChild(list.children[i]);
            // list.splice(i, 1);
        }
    }
}

btn.addEventListener("click", removeElement);   