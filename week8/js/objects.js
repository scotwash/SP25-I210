function attack(enemyDef) {
    const dmg = this.atk - enemyDef;
    if (dmg <= 0) {
        return 0;
    } else {
        return dmf
    }
}

// objects

const person = {
    //properties (variables that belong to this object)
    name: "Ty the Cleric Guy",
    hp: 10,
    def: 0,
    atk : 2,
    spd: 3,

    //method (functions that belong to this object)

    attack(enemyDef) {
        const dmg = this.atk - enemyDef;
        if (dmg <=0) {
            return 0;
        }
        else {
            return dmg;
        }
    },

    takeDamage(damageAmount) {
        this.hp -= damageAmount;
    }
};

const enemy = {
    name: "Slime",
    hp: 4,
    def: 3,
    atk: 1,
    spd: 1,
// method (function that belong to this object)

    attack() {
        return this.atk;
    },

    takeDamage(damageAmount) {
        this.hp -=damageAmount;
    },
    
    
};


// Ty attacks Slime

const tyDmg = person.attack(enemy.def);
console.log(tyDmg);
console.log("Slime Hp:", enemy.hp);

enemy.takeDamage(tyDmg);
console.log("Slime HP:", enemy.hp);

const characters = [
    {name: "Bob", hp: 2, atk: 3},
    {name: "Bob2", hp: 2, atk: 3},
    {name: "John", hp: 2, atk: 3},
    {name: "Anna", hp: 2, atk: 3},
];

console.log("First Characters:", characters[0].name);




