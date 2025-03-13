// declare array for list of scores
const scoreList = [
    95,
    72,
    88,
    45,
    60,
    79,
    82,
    91, 
    50,
    38,
];

// create references to ul

const ulScore = document.querySelector("body > ul");

// create reference to unique id paragraph tag 

let idScore = document.getElementById("score");



// add for loop to that loops through the list of scores

for (let index = 0; index < scoreList.length; index++) {
    const scoreLists = scoreList[index]; 
    

    //add li to ul for each score

    ulScore.innerHTML+="<li>" + scoreLists + "</li>";
    


   
}
// declare average variable and add it into tag  
const averageScore = (95 + 72 + 88 + 45 + 60 + 79 + 82 + 91 + 50 + 38) / (10);
    console.log(averageScore);
idScore.innerHTML+="<p id='score' >" + averageScore + "</p>";


