// declare varaible for list of instruments

const instrumentArray = [
    "Piano",
    "Guitar",
    "Violin",
    "Drums",
    "Saxophone",
    "Flute",
];

// make reference to the ul

const ulInstrument = document.querySelector("body > ul");

// for loop that loops through the instruments

for (let index = 0; index < instrumentArray.length; index++) {
    const instrumentArrays = instrumentArray[index];
    console.log(instrumentArrays);
    // print instrument list and add list element 
    ulInstrument.innerHTML+="<li class='instruments' >" + instrumentArrays + "</li>";

}
