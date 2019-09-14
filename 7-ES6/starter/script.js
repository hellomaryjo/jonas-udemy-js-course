// // es5 are function scoped

// // es6 vars are block scoped

// // iife in es6

// // this is block w/ data privacy
// { 
//     const a = 1;
//     let b = 2;
// }

// // strings

// let firstName = 'Adrian';
// let lastName = 'Haynes';

// const n = `${firstName} ${lastName}`;

// console.log(n.startsWith('A'));
// console.log(n.endsWith('es'));
// console.log(n.includes(' '));
// console.log(`${firstName.repeat(5)}`);

// // arrow fns

// // arrow fns 2

// function Person(name) {
//     this.name = name;
// }

// var friends = ['Marissa', 'Ricky', 'Andrew'];

// Person.prototype.myFriends6 = function(friends) {
//     var arr = friends.map(el => this.name + ' is friends with ' + el);

//     console.log(arr);
// }

// new Person('DooDoo').myFriends6(friends);


// Desctructuring
// const [name, year] = ['John', 26];
// console.log(name, year);

// const obj = {
//     firstName: 'John',
//     lastName: 'Smith'
// };

// const {firstName, lastName} = obj;
// console.log(firstName, lastName);
// // OR
// const {firstName: a, lastName: b} = obj;
// console.log(a, b);

// function calcAgeRetirement(year) {
//     const age = new Date().getFullYear() - year;
//     return [age, 65 - age];
// }

// const [age2, retirement] = calcAgeRetirement(1990);
// console.log(age2);
// console.log(retirement);

// Arrays
// const boxes = document.querySelectorAll('.box');

// // ES5
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(cur) {
//  cur.style.backgroundColor = 'dodgerblue';    
// });

// // ES6
// const boxesArr6 = Array.from(boxes);
// boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// // ES5
// // for (var i = 0; i < boxesArr5.length; i++) {
// //     if (boxesArr5[i].className === 'box blue') {
// //         continue;
// //     }

// //     boxesArr5[i].textContent = 'I changed to blue';
// // }

// // ES6
// for (const cur of boxesArr6) {
//     if (cur.className.includes('blue')) {
//         continue;
//     }
//     cur.textContent = 'I changed to blue';
// }

// // ES5
// var ages = [12, 17, 8, 21, 14, 11];
// var full = ages.map(function(cur) {
//     return cur >= 18;
// });

// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);

// // ES6
// console.log(ages.findIndex(cur => cur >= 18));
// console.log(ages.find(cur => cur >= 18)); // finds val


// Spread operator

// function addFourAges (a, b, c, d) {
//     return a + b + c + d;
// }

// var sum1 = addFourAges(18, 20, 12, 21);
// console.log(sum1);

// // ES5
// var ages = [18, 20, 12, 21];
// var sum2 = addFourAges.apply(null, ages);

// // ES6
// const max3 = addFourAges(...ages);

// const familySmith = ['John', 'Jane', 'Mark'];
// const familyMiller = ['Mary', 'Bob', 'Ann'];
// const bigFamily = [...familySmith, 'Lily', ...familyMiller];
// console.log(bigFamily);

// const h = document.querySelector('h1');
// const boxes = document.querySelectorAll('.box');
// const all = [h, ...boxes];
 
// Array.from(all).forEach(cur => cur.style.color = 'purple');

// Rest params

// ES5
// function isFullAge() {
//     var argsArr = Array.prototype.slice.call(arguments);

//     argsArr.forEach(function(cur) {
//         console.log((2019 - cur) >= 18);
//     });
// }

// isFullAge(1990, 1999, 1965);

// es6
// function isFullAge6(...years) {
//    years.forEach(cur => console.log((2019 - cur) >= 18));
// }

// isFullAge6(1990, 1999, 1965, 2016);


// ES5
// function isFullAge(limit) {
//     var argsArr = Array.prototype.slice.call(arguments, 1);

//     argsArr.forEach(function(cur) {
//         console.log((2019 - cur) >= limit);
//     });
// }

// isFullAge(21, 1990, 1999, 1965);

// // es6
// function isFullAge6(limit, ...years) {
//    years.forEach(cur => console.log((2019 - cur) >= limit));
// }

// isFullAge6(16, 1990, 1999, 1965, 2016);

// Default params

// ES5
// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

//     lastName === undefined ? lastName = 'Smith' : lastName = lastName;
//     nationality === undefined ? nationality = 'American' : nationality = nationality;

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }

// var john = new SmithPerson('John', 1990);
// var emily = new SmithPerson('John', 1963, 'Diaz', 'Spanish');

// ES6
// function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality; 
// }

// var john = new SmithPerson('John', 1990);
// var emily = new SmithPerson('John', 1963, 'Diaz', 'Spanish');

// Classes

// es5
// var Person5 = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person5.prototype.calculateAge = function() {
//     var age = new Date().getFullYear - this.yearOfBirth;
//     console.log(age);
// }

// var john5 = new Person5('John', 1990, 'teacher');

// // es6
// class Person6 {
//     constructor(name, yearOfBirth, job) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }

//     calculateAge() {
//         var age = new Date().getFullYear() - this.yearOfBirth;
//         console.log(age);
//     }

//     // could be a helper fn or something
//     static greeting() {
//         console.log('Hey there!');
//     }
// }

// const john6 = new Person6('John', 1990, 'teacher');

// class Athlete6 extends Person6 {
//     constructor(name, yearOfBirth, job, olympicGames, medals) {
//         super(name, yearOfBirth, job);
//         this.olympicGames;
//         this.medals = medals;
//     }

//     wonMedal() {
//         this.medals++;
//         console.log(this.medals);
//     }
// }

// const johnAthlete6 = new Athlete6('john', 1990, 'swimmer', 3, 6);

// johnAthlete6.wonMedal();
// johnAthlete6.calculateAge();

// create 3 parks: name, year
// create 4 streets: name, year

class Element {
    constructor(name, yearBuilt) {
        this.name = name;
        this.yearBuilt = yearBuilt;  
    }
}

class Park extends Element {
    constructor(name, yearBuilt, trees, area) {
        super(name, yearBuilt);
        this.name = name;
        this.yearBuilt = yearBuilt;
        this.trees = trees;
        this.area = area;
    }

    treeDensity() {
        const density = this.trees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}

class Street extends Element {
    constructor(name, yearBuilt, length, size = 3) {
        super(name, yearBuilt);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');

        console.log(`${this.name}, built in ${this.yearBuilt}, is a ${classification.get(this.size)} street.`);
    }
}

const allParks = [
    new Park('White Rock Lake Park', 1910, 1014, 0.2), 
    new Park('Oak Cliff Park', 1888, 599, 2.9),
    new Park('Tietze', 1924, 333, 0.4)
];

const allStreets = [
    new Street('Garland Rd', 1911, 1.1, 4),
    new Street('Buckner Rd', 1950, 2.5, 2),
    new Street('Lake Highlands Rd', 2007, 3.3)
];

function calc(arr) {
    const sum = arr.reduce((prev, cur) => prev + cur, 0);
    // start at 0 + [3, 5, 6]

    return [sum, sum / arr.length];
}

function reportParks(p) {
 console.log('---PARKS REPORT---');

    // Density
    p.forEach(el => el.treeDensity());

    // Avg age
    const ages = p.map(el => new Date().getFullYear() - el.yearBuilt);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years`);

    // More than 1000 trees
    const index = p.map(el => el.trees).findIndex(el => el >= 1000);
    console.log(`${p[index].name} has more than 1000 trees.`);
}   

function reportStreets(s) {
    console.log('---STREETS REPORT---');

    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Out ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength}`);

    // Classify sizes
    s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);