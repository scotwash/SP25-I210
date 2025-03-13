const titleRef = document.getElementById("title");

console.log(titleRef);

const itemsRef = document.getElementsByClassName("item");

console.log(itemsRef);

const altTitleRef = document.querySelector("title");

console.log(altTitleRef);

const itemsAltRef = document.querySelectorAll(".item");

console.log(itemsAltRef);

console.log(titleRef.innerHTML);

const ulRef = document.querySelector("body > ul");

console.log(ulRef.innerHTML);

titleRef.innerHTML = "DOM Manipulation >:)"

ulRef.innerHTML = "";

const fruits = [
    "Cantaloupe",
    "Watermelon",
    "Dragonfruit",
    "Honeydew",
    "Grapes",
    "Apple",
];

for (let index = 0; index < fruits.length; index++) {
    const fruit = fruits[index];
    console.log(fruit)
    ulRef.innerHTML+="<li class='items' >" + fruit + "</li>";
}


titleRef.style.backgroundColor = "red";
titleRef.style.color = "00ff00";
titleRef.style.fontSize = "32px";

document.querySelector("body > ul li").style.display = "none";
document.querySelector("body > ul li").style.display = "block";

document.querySelector("nav ul").style.display = "flex";

const firstARef = document.querySelector("a");

console.log("first a:", firstARef);
firstARef.href = "dom.html"

