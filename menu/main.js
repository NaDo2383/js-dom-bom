let menus = [{ id: 1, name: "Home", href: "#" }, { id: 1, name: "Contact", href: "#" }]
let ulEl = document.createElement("ul");
let mainEl = document.getElementById("container");
for (let i = 0; i < menus.length; i++) {
    let liEl = document.createElement("li");
    let aEl = document.createElement("a");
    aEl.innerHTML = menus[i].name;
    aEl.href = menus[i].href;
    liEl.appendChild(aEl);
    ulEl.appendChild(liEl);
}
mainEl.appendChild(ulEl);
