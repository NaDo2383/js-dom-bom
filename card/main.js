let imgEl = document.createElement("img");
let cardHeadEl = document.createElement("h2");
let cardBodyEl = document.createElement("p");
imgEl.src = "https://i.picsum.photos/id/814/200/200.jpg?hmac=cpUMsYdlkULqgLonFpQyNS2QBtsSI7vTX1_ew8-lS8A";
cardHeadEl.innerHTML = "What is Lorem Ipsum?";
cardBodyEl.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

let container = document.getElementById("container");
container.style.width = "300px";
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.justifyContent = "center";
container.style.border = "solid black 3px";
container.style.borderRadius = "50px";
container.style.padding = "20px";
imgEl.style.borderRadius = "40px";
container.appendChild(imgEl);
container.appendChild(cardHeadEl);
container.appendChild(cardBodyEl);
