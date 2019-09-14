///////////////////////////////////////
// Lecture: Hoisting

// FUNCTIONS

// this is stored in var obj before code is executed
// only works for function declarations
calculateAge(1990);

function calculateAge(year) {
    console.log(2019 - year);
}

var retirement = function(year) {
    console.log(65 - (2019 - year));
}

// can not be placed before function expression
retirement(1990);

// VARIABLES

// returns undefined because age is declared after
// stored, but there is no value defined
console.log(age); 

var age = 23;
console.log(age);

function foo() {
    var age = 65;
    console.log(age);
}

foo();
console.log(age);











///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









