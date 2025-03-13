console.log("Cozy Home")

console.log("2+7 =", 2 + 7);
console.log("'2' + '2' =", "2" + "2");
console.log("My name is " + "Ty");
console.log("2 + 2 = ", 2 + Number("2"));

if(true) {
    console.log("Always true");
} 
else {
    console.error("This should never happen");
}

let money = 0.75

if(money >= 0.5) {
    console.log("You will pay me a bus ticket");
    money-= 0.5;

} else if (money >= 0.25) {
    console.log("Catch a ride with the mysterious hat person");
    console.log("Sounds a little sketch but its your life");
    money -=0.25
} else{
    console.log("You're broke, walk home");
    console.log("Its a 5 hr walk");
}