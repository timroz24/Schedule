///////////////////////////////////////
// Lecture: Hoisting

age(1985);

function age(year)
{
    console.log(2017 - year);
}




var getAge = function(yr)
{
    console.log(2017 - yr);
}

getAge(1985)


console.log(person)
var person = true;


function isPerson(bool)
{
    var person = bool;
    console.log(person);
}

isPerson(false);

console.log(person);








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

var john = {
    'Name': 'John',
    'Lastname': 'Thomas',
    'Age': 1967,
    'getAGe': function()
    {
        console.log(2017 - this.Age);
        console.log(this);
    }
};

john.getAGe();
console.log(this);








