const favoriteBread = ["White Bread", "Cinnamon Bread", "Wheat Bread"];

console.log(favoriteBread);
console.table(favoriteBread);

console.log("First thing", favoriteBread[0]);

console.log( "# of fav mold:", favoriteBread.length);

for (let i = 0; i <favoriteBread.length; i++) {
    const bread = favoriteBread[i];
    console.log(bread);
}

