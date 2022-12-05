interface Component {
    getDetail(): string;
}

class ProductComponent implements Component {
    protected name: string;

    constructor(name:string) {
        this.name = name;
    }

    public getDetail(): string {
        return `${this.name}`;
    }
}

abstract class ProductDecorator implements Component {
    protected component: Component;

    constructor(component: Component) {
        this.component = component;
    }

    public getDetail(): string {
        return this.component.getDetail();
    }
}

// decorator 1
class CommercialInfoProductDecorator extends ProductDecorator {
    private  tradename: string;
    private brand: string;

    constructor(component: Component, tradename: string, brand:string) {
        super(component);

        this.tradename = tradename;
        this.brand = brand;
    }

    public getDetail(): string {
        return  `${this.tradename} ${this.brand} ${super.getDetail()}`;
    }
}

// decorator 2
class StoreProductDecorator extends ProductDecorator {
    private price: number;

    constructor(component: Component, price: number) {
        super(component);

        this.price = price;
    }

    public getDetail(): string {
        return  `${this.price} ${super.getDetail()}`;
    }
}

// decorator 2
class HTMLProductDecorator extends ProductDecorator {
    
    public getDetail(): string {
        return  `<h1>Product Information</h1><p>${super.getDetail()}</p>`;
    }
}


// Ejecución
// component
const productComponent = new ProductComponent("Cerveza");
console.log(productComponent.getDetail());

// decorator 1 con component
const commercialInfoProduct = new CommercialInfoProductDecorator(productComponent, "London Porter", "Fuller's");
console.log(commercialInfoProduct.getDetail());

// decorator 2 con component
const storeProduct = new StoreProductDecorator(productComponent, 15.5);
console.log(storeProduct.getDetail());

// decorador 2 con decorador 1
const storeProduct2 = new StoreProductDecorator(commercialInfoProduct, 15.5);
console.log(storeProduct2.getDetail());

// decorator 3 con decorator 2 con decorator 1
const htmlProduct = new HTMLProductDecorator(storeProduct2);
console.log(htmlProduct.getDetail());