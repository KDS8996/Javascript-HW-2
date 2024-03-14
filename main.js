// Question 1

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
};


function displayFavoriteFood(person) {
    for (let key in person) {
        if (Array.isArray(person[key])) {
            console.log(`${key}:`);
            person[key].forEach(item => console.log(`  - ${item}`));
        } else if (typeof person[key] === 'object') {
            console.log(`${key}:`);
            for (let subKey in person[key][0]) {
                console.log(`  - ${person[key][0][subKey]} (${subKey})`);
            }
        } else {
            console.log(`${key}: ${person[key]}`);
        }
    }
}

displayFavoriteFood(person3);

function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Question 2

Person.prototype.printInfo = () => {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
};

Person.prototype.addAge = () => {
    this.age++;
};

let person1 = new Person('John', 30);
let person2 = new Person('Alice', 25);

person1.printInfo();
person2.printInfo();

person1.addAge(3);

person1.printInfo();


// Question 3

function checkStringLength(str) {
    return new Promise((resolve, reject) => {
        if (str.length > 10) {
            resolve("Big word");
        } else {
            reject("Small Number");
        }
    });
}

checkStringLength("Hello World")
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });

checkStringLength("Hello")
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });

// Question 4 - codewars

function splitAndMerge(string, separator) {
    return string
        .split(" ")
        .map(word => word.split("").join(separator))
        .join(" ");
}

console.log(splitAndMerge("My name is John", " "));
console.log(splitAndMerge("My name is John", "-"));
console.log(splitAndMerge("Hello World!", "."));
console.log(splitAndMerge("Hello World!", ","));


// Question 5 - codewars

function latestClock(a, b, c, d) {
    const digits = [a, b, c, d].sort((x, y) => y - x);

    for (let i = 23; i >= 0; i--) {
        for (let j = 59; j >= 0; j--) {
            const timeDigits = [i / 10 | 0, i % 10, j / 10 | 0, j % 10].sort((x, y) => y - x);
            if (timeDigits.every((digit, idx) => digit === digits[idx])) {
                return `${i.toString().padStart(2, '0')}:${j.toString().padStart(2, '0')}`;
            }
        }
    }

    return '00:00';
}

// Test cases
console.log(latestClock(1, 9, 8, 3)); // "19:38"
console.log(latestClock(9, 1, 2, 5)); // "21:59"
