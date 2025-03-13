# homework-3

# Key Takeaways
In order to call a variable that does not change, you would declare the variable as "const". However if later you want the variable to change you would declare it with "let". You can even do this with arrays which are a collection of variables. So far We have used numbers and strings. 

There are also ways to add specific elements to html using JavaScript. You link Javascript like linking a stylesheet, but instead you use the script src command. Then you would put an element like ul or p. You go into Javascript and make a reference to the ul by typing something like, 

"const ulRef = document.querySelector("body>ul");"

Then you could make a reference to the string you want to put in the element by typing somehing like,

const instrumentArray = [
    "Piano",
    "Guitar",
    "Violin",
    "Drums",
    "Saxophone",
    "Flute",
];

Then you would make a for loop that loops through the list and then write the innerHTML command after the ul reference variable to print the array in the HTML element like this. 

// for loop that loops through the instruments

for (let index = 0; index < instrumentArray.length; index++) {
    const instrumentArrays = instrumentArray[index];
    console.log(instrumentArrays);
    // print instrument list and add list element 
    ulInstrument.innerHTML+="<li class='instruments' >" + instrumentArrays + "</li>";

}

You can also use a special id for an element, and then use JavaScript to reference a specific id of an element. You first create a reference to the unique id by typing,

let idScore = document.getElementById("unique-id");

Then you could use the innerHTML command to put text in like you do normally with JavaScript. 

And finally you are able to create new tags in Javascript and add them into HTML by declaring the variable and then typing, "= document.createElement("element");


# Live Link
 https://scotwash.github.io/homework-3
