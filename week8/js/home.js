// declare variable to reference ul

const dogUlRef = document.querySelector("#doggos");

// data array of dogs

const dogBreeds = ["German Shepard", "Pomeranian", "Wolf Dog", "Akita", "Husky", "Boxer", "Bulldog"];

// variables for photo sources
const dogImages = [
    "https://nativepet.com/cdn/shop/articles/German_Shepherd_Puppy_on_Sofa.jpg?v=1682026780&width=1000",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Pomeranian.JPG/640px-Pomeranian.JPG",
    "https://wolf.org/wp-content/uploads/2020/10/midcontenthybridwolfsanctuary.jpg",
    "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/06154034/Akita-standing-outdoors-in-the-summer.jpg",
    "https://www.akc.org/wp-content/uploads/2017/11/Siberian-Husky-standing-outdoors-in-the-winter.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRygsX7tJ4BgrNgwluY_HafFzj5FXYIXipO5BAmqi3PA7Ssw-2d8bpPH0okbZGi-CEGek91crccXdMcGCPdlm9L3Q",
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQf6-MvFnCN_a3Dmj93BB6IH611yCADGjTP4YD5_ghGyagf7TTYU3YAibEDelT_6jvxxFp71GG_goX-66tx5Ken3A",

];

// loop through the list 
for (let i = 0; i < dogBreeds.length; i++) {
    
    // make variable for array and index

    const dog = dogBreeds[i];
    console.log(dog);

    // declare variables for image array and index
    const dogImg = dogImages[i];
    console.log(dogImg);
    
    const imageHtml = "<img src='" + dogImg + "'alt='' />";

    // add dogs to ul

    dogUlRef.innerHTML += "<li>" + dog + imageHtml + "</li";
}