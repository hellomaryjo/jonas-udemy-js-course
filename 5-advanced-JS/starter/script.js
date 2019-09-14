// // Function constructor

// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// var adrian = new Person('Adrian', 1989, 'sick fucking dude my guy');

// // what happens with 'new' operator?
// // 1. EMPTY obj is created
// // 2. The constructor function is called with args we specified 
// // 3. If constructor doesn't return anything, then it defaults to whatever is defined (the variable 'adrian' in the above case)

// var jane = new Person('Jane', 1979, 'designer');
// var mark = new Person('Mark', 1948, 'retired');

// // prototype inheritance
// Person.prototype.calculateAge = function() {
//     console.log(2018 - this.yearOfBirth);
// }

// adrian.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// // can add props instead of methods, BUT not as common

// Person.prototype.lastName = 'Haynes';

// console.log(adrian.lastName);

// // my own obj contructors

// var Character = function(charClass, charRace, charLevel) {
//     this.charClass = charClass;
//     this.charRace = charRace;
//     this.charLevel = charLevel;
// }

// var fleo = new Character('Druid', 'Half-elf', 12);
// var nelli = new Character('Warlock', 'Tiefling', 9);

// Character.prototype.calculateCharisma = function() {
//     if(this.charLevel <= 10) {
//         console.log('+3');
//     } else {
//         console.log('+4');
//     }
// }

// fleo.calculateCharisma();
// nelli.calculateCharisma();

// hasOwnProperty() return true for props that exist in the object

// ^ but will return FALSE if that prop is inherited...so the lastName prop for example would return false

// instanceof returns true of false for objects that were created by a obj constructor


// Object.create
// var personProto = {
//     calculateAge: function() {
//         console.log(2019 - this.yearOfBirth);
//     }
// };

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';

// var jane = Object.create(personProto, {
//     name: { value: 'Jane' },
//     yearOfBirth: { value: 1969 },
//     job: { value: 'designer' }
// });

// Passing functions as args

// var years = [1990, 1965, 1937, 1998, 1945];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(el) {
//     return 2019 - el;
// }

// function isFullAge(el) {
//     return el >= 18;
// }

// function maxHeartRate(el) {
//     if (el >= 18 && el <= 81) {
//         return Math.round(206.9 - (0.67 * el));
//     } else {
//         return -1;
//     }
// }

// var ages = arrayCalc(years, calculateAge);
// console.log(ages);

// var fullAges = arrayCalc(ages, isFullAge)
// console.log(fullAges);

// var maxHeartRates = arrayCalc(ages, maxHeartRate)
// console.log(maxHeartRates);

// Functions returning functions

// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + ', can you please explain what UX design is?');
//         }
//     } else if (job === 'teacher') {
//         return function(name) {
//             console.log(name + ', what subject do you teach?');
//         }
//     } else {
//         return function(name) {
//             console.log('Hello ' + name + ', what do you do?')
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');

// teacherQuestion('John');
// designerQuestion('David');

// interviewQuestion('teacher')('Mark');

// IIFE
// Good for data privacy if you don't need to reuse your code

// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();

// // Better way!

// (function() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })(); // no way access from the outside! data security

// (function(goodLuck) {
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(5);

// why does this work? JS will think whats inside parathensis is not a statement, and will treat as expression

// Closures

// function retirement(retirementAge) {
//     var a = ' years left until retirement.';
//     return function(yearOfBirth) {
//         var age = 2019 - yearOfBirth;
//         console.log((retirementAge - age) + a)
//     }
// }

// var retirementUS = retirement(66);
// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);

// retirementUS(1990);
// retirementGermany(1990);
// retirementIceland(1990);

// function interviewQuestion(question) {
//     return function(name) {
//         console.log(name + ', ' + question)
//     }
// }

// var interviewQuestionDesigner = interviewQuestion('can you please explain what UX design is?');
// var interviewQuestionTeacher = interviewQuestion('what subject do you teach?');

// interviewQuestionDesigner('Adrian');
// interviewQuestionTeacher('Jonas');


// Bind, call and apply

// var john = {
//     name: 'John',
//     age: 26,
//     job: 'teacher',
//     presentation: function(style, timeOfDay) {
//         if (style === 'formal') {
//             console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old');
//         } else if (style === 'friendly') {
//             console.log('What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old');
//         }  
//     }
// }

// var emily = {
//     name: 'Emily',
//     age: 35,
//     job: 'Designer'
// };

// // use call method to use presentation method
// // 1st argument in call() equals the 'this' variable

// john.presentation.call(emily, 'friendly', 'afternoon');

// // this is called method borrowing

// // apply() is similar, only difference is that it accepts args as an array
// // this won't work b/c it method doesn't expect to receive an array
// // john.presentation.apply(emily, ['friendly', 'afternoon']);

// // bind() method also similar to call()
// // bind() just creates COPY of method as function

// var johnFriendly = john.presentation.bind(john, 'friendly');

// // this is calling carrying, create a function with SOME preset parameters
// johnFriendly('morning');
// johnFriendly('night');

// var emilyFormal = john.presentation.bind(emily, 'formal');

// emilyFormal('afternoon');


// var years = [1990, 1965, 1937, 1998, 1945];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(el) {
//     return 2019 - el;
// }

// function isFullAge(limit, el) {
//     return el >= limit;
// }

// var ages = arrayCalc(years, calculateAge);
// var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

// console.log(ages);
// console.log(fullJapan);

// CODING CHALLENGE 7

// Step 1: BUild a function constructor

(function () {

var Question = function(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}

var question1 = new Question('Who directed "Goodfellas"?', ['Stanley Kubrick', 'Steven Spielberg', 'Martin Scorcese'], 2);

var question2 = new Question('Who directed "Point Break"?', ['Kathryn Bigelow', 'James Cameron', 'The Wachowskis'], 0);

var question3 = new Question('Who directed "Fargo"?', ['Quentin Tarantino', 'David Fincher', 'The Coen Brothers'], 2);

var movieTest = [question1, question2, question3];

Question.prototype.randomQuestion = function() {

    var userAnswer;
    var selectQuestion;

    var generateRandomQuestion = function() {
        selectQuestion = Math.floor(Math.random() * movieTest.length);
        console.log(movieTest[selectQuestion].question);
        for (var i = 0; i < movieTest.length; i++) {
            console.log(i + ': ' + movieTest[selectQuestion].answers[i]);
        }
        userAnswer = prompt(movieTest[selectQuestion].question + ' NOTE: enter "end" to end the game'); 
    }

    generateRandomQuestion();

        let playGame = true;
        let score = 0;

        while(playGame) {
            if (parseInt(userAnswer) === movieTest[selectQuestion].correctAnswer) {
                score++;
                console.log('Your current score is ' + score);
                alert('That is correct!');
                generateRandomQuestion();
            } else if (userAnswer === 'end') {
                playGame = false;
            } else {
                console.log('Your current score is ' + score);
                alert('Sorry, that is not the correct answer. Try again!');
                generateRandomQuestion();
            }
        }
    }

question1.randomQuestion();

})();