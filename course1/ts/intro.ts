// clase
class Drink 
{
    private name: string;

    constructor(name: string) 
    {
        this.name = name;
    }

    info(): string 
    {
        return `The drink is ${this.name}`
    }
}

const drink = new Drink("water")
console.log(drink.info())

// herencia
class Beer extends Drink 
{
    private alcohol: number

    constructor(name: string, alcohol: number)
    {
        super(name)
        this.alcohol = alcohol;
    }

    info(): string 
    {
        return `${super.info()} with alcohol ${this.alcohol}`
    }
}

const beer = new Beer("heiniken", 4.5)
console.log(beer.info())

// interfaz
interface Product 
{
    price: number
    getPrice(): string
}

class Beer2 extends Drink implements Product {
    private alcohol: number;
    price: number;

    constructor(name: string, alcohol: number, price: number)
    {
        super(name)
        this.alcohol = alcohol;
        this.price = price;
    }

    info(): string 
    {
        return `${super.info()} with alcohol ${this.alcohol} price ${this.getPrice()}`
    }   
    
    getPrice(): string {
        return `$${this.price}`
    }
}

const beer2 = new Beer2("corona", 4.5, 4.99)
console.log(beer2.info())

class Snack implements Product {
    name: string
    price: number

    constructor(name: string, price: number) 
    {
        this.name = name
        this.price = price
    }

    getPrice(): string 
    {
        return `The price it's $${this.price}`
    }
}

const products : Product[] = [ 
                                new Beer2("gallo", 4.5, 4.50),
                                new Snack("candies", 2.99)
                            ]

console.log(products)