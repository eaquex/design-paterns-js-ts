class SaleContext 
{
    constructor(strategy)
    {
        this.strategy = strategy
    }

    setStrategy(strategy)
    {
        this.strategy = strategy 
    }

    calculate(amount)
    {
        return this.strategy.calculate(amount)
    }
}

class RegularSaleStrategy 
{
    constructor(tax) 
    {
        this.tax = tax
    }

    calculate(amount)
    {
        return amount + (amount*this.tax)
    }
}

class DiscountSaleStrategy 
{
    constructor(tax, discount)
    {
        this.tax = tax
        this.discount = discount
    }

    calculate(amount)
    {
        return amount + (amount*this.tax) - this.discount
    }    
}

class ForeignSaleStrategy 
{
    getDollarPrice() 
    {
        return 7.50
    }

    calculate(amount)
    {
        return amount * this.getDollarPrice()        
    }
}

const regularSale = new RegularSaleStrategy(0.12)
const discountSale = new DiscountSaleStrategy(0.12, 5.00)
const foreignSale = new ForeignSaleStrategy()

const sale = new SaleContext(regularSale)
console.log(sale.calculate(10))

sale.setStrategy(discountSale)
console.log(sale.calculate(10))

sale.setStrategy(foreignSale)
console.log(sale.calculate(10))


// Ejemplo
const beerData = [
    {
        name: "Erdinger Pikantus",
        country: "Alemania",
        info: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum",
        img: "https://pbs.twimg.com/media/EzccV8BWEAEyXjK.jpg:large"
    },
    {
        name: "Corona",
        country: "México",
        info: "Deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt",
        img: "https://st3.depositphotos.com/7000042/15833/i/600/depositphotos_158334504-stock-photo-editorial-photo-of-corona-beer.jpg"
    },
    {
        name: "Delirium Tremends",
        country: "Bélgica",
        info: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus",
        img: "https://cdn.shopify.com/s/files/1/0068/0221/0879/products/DeliriumTremens_2048x2048.jpg?v=1643211005"
    }
]

class InfoContext 
{
    constructor(strategy, data, element)
    {
        this.setStrategy(strategy)
        this.data = data
        this.element = element
    }

    setStrategy(strategy)
    {
        this.strategy = strategy
    }

    show()
    {
        this.strategy.show(this.data, this.element)
    }
}

class ListStrategy 
{
    show(data, element)
    {
        element.innerHTML = data.reduce( (acumulated, item) => {
            return acumulated + `<div><h2>${item.name}</h2><p>${item.country}</p></div><hr>`
        }, "")
    }
}

class DetailedListStrategy 
{
    show(data, element)
    {
        element.innerHTML = data.reduce( (acumulated, item) => {
            return acumulated + `<div><h2>${item.name}</h2><p>${item.country}</p><p>${item.info}</p></div><hr>`
        }, "")
    }
}

class ListWithImageStrategy 
{
    show(data, element)
    {
        element.innerHTML = data.reduce( (acumulated, item) => {
            return acumulated + `<div><img width="100" src="${item.img}"/><h2>${item.name}</h2></div><hr>`
        }, "")
    }
}

const strategies = [
    new ListStrategy(),
    new DetailedListStrategy(),
    new ListWithImageStrategy()
]

const info = new InfoContext(new ListStrategy(), beerData, content)

slcOptions.addEventListener('change', (event) => {
    const option = event.target.value
    info.setStrategy(strategies[option])
    info.show()
})