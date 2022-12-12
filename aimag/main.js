//task1 
let liElFirst = document.getElementsByTagName("li")[0];
console.log(liElFirst);


//task2 

let liElLast = document.getElementsByTagName("li")[document.getElementsByTagName("li").length - 1];
console.log(liElLast);


//task3
let liSb = document.getElementById("aimag-315");
console.log(liSb);

//task4 
for (let i = 0; i < document.getElementsByTagName("li").length; i++) {
    let liChange = document.getElementsByTagName("li")[i];
    liChange.style.color = "green";
    liChange.style.fontSize = "24px";
    liChange.style.border = "solid black 1px";
    liChange.style.padding = "2px";
    liChange.style.margin = "2px";
}

//task5
for (let j = 0; j < document.getElementsByTagName("li").length; j++) {
    let a = document.getElementsByTagName("li")[j].id;
    if (a[6] == 1) {
        document.getElementsByTagName("li")[j].style.backgroundColor = "aqua";
    } else if (a[6] == 2) {
        document.getElementsByTagName("li")[j].style.backgroundColor = "blue";
    } else if (a[6] == 3) {
        document.getElementsByTagName("li")[j].style.backgroundColor = "red";
    } else if (a[6] == 4) {
        document.getElementsByTagName("li")[j].style.backgroundColor = "grey";
    } else if (a[6] == 5) {
        document.getElementsByTagName("li")[j].style.backgroundColor = "orange";
    } else { }
}