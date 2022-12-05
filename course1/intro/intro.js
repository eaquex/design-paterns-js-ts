// basic functions
function sum(a,  b) 
{
    return a+b
}

let res = sum(1, 2)
console.log(res)

const fSum = sum
res = fSum(5,6)
console.log(res)

function operacion(fn, a, b)
{
    console.log("se hace algo")
    console.log(fn(a,b))
}

operacion(sum, 10, 20)

let fa = function() 
{
    console.log("algo")
}

fa()

// Arrow functions

let faa = () => console.log("arrow function")

faa()

operacion((a,b) => a*b, 5, 5 )
operacion((a,b) => {
    const c = a +  b
    return c
}, 1, 2)

// foreach
const names = ["Héctor", "Juan", "Pablo"]

names.forEach((name) => console.log(name))
names.forEach((name) => console.log(name.toUpperCase()))

// map
const namesUpper = names.map((name) => name.toUpperCase()) 
console.log(names);
console.log(namesUpper);

// reduce
const numbers = [5, 4, 7, 1, 10]
const total = numbers.reduce((ac, number) => ac + number, 0)
console.log(total)

// clase
class Drink 
{
    constructor(name) 
    {
        this.name = name;
    }

    info()
    {
        return `The drink is ${this.name}`;
    }
}

const drink = new Drink("agua");
console.log(drink.info());

// clase funcional
function Drink2(name) 
{
    this.name = name;
    this.info = () => {
        return `The drink is ${this.name}`;
    }
}

const drink2 = new Drink2("agua");
console.log(drink2.info());

// herencia
class Beer extends Drink 
{
    constructor(name, alcohol)
    {
        super(name);
        this.alcohol = alcohol;
    }

    info() 
    {
        return  `${super.info()} with ${this.alcohol} alcohol.`;
    }
}

const beer = new Beer("erdinger", 8.5);
console.log(beer.info());
