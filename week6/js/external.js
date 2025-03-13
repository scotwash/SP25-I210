console.log("Ummmm where are we?")

const birthYear = 1207;

let myName = "Ty the Noodle Arm Guy";
console.log(myName, "was born", birthYear);

myName = "Ty the Fly Guy";

console.warn(myName, "May have devoured ten souls");

console.log("myName is", myName.length, "character long.");

console.log("myName includes Ty", myName.toUpperCase().includes("TY"));

myName = "Ty";

console.log("myName was uppercase:", myName !== myName.toLowerCase());
console.log("myName has lowecase:", myName !== myName.toUpperCase());

const PI = 3.1415926535897932384626;

console.log(PI.toFixed(2));

//Get a random number between 1-100

const randomNumber = (Math.random() * 100) + 1;

console.log("random number:" , randomNumber);
console.log(Math.PI - PI, PI.toString().length);

console.log("loose check", PI ==PI.toString());
console.log("start check", PI == PI.toString());