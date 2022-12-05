// component
class ProductComponent {
    constructor(name) {
        this.name = name;
    }

    getDetail() {
        return `${this.name}`;
    }
}

// decorator
class ProductDecorator {
    constructor(productComponent) {
        this.productComponent = productComponent;
    }

    getDetail() {
        return this.productComponent.getDetail();
    }
}

class CommercialInfoProductDecorator extends ProductDecorator {
    constructor(produtComponent, tradename, brand) {
        super(productComponent);

        this.tradename = tradename;
        this.brand = brand;
    }

    getDetail() {
        return `${super.getDetail()} ${this.tradename} ${this.brand}`;
    }
}


class StoreProductDecorator extends ProductDecorator {
    constructor(productComponent, price) {
        super(productComponent);

        this.price = price;
    }

    getDetail() {
        return `${super.getDetail()} $${this.price}`;
    }
}

// Ejecución
// componente
const productComponent = new ProductComponent("cerveza");
//console.log(productComponent.getDetail());

// decorador 1 con component
const commercialInfoProduct = new CommercialInfoProductDecorator(productComponent, "London Porter", "Fuller's");
console.log(commercialInfoProduct.getDetail());

// decorador 2 con component
const storeProduct = new StoreProductDecorator(productComponent, 10.00);
console.log(storeProduct.getDetail());

const product = new StoreProductDecorator(commercialInfoProduct, 15.5);
console.log(product.getDetail());


// decorador 3 con decorator 2 con decorator 1
class HTMLProductDecorator extends ProductDecorator {
    getDetail() {
        return `<h1>Información del producto</h1><p>${super.getDetail()}</p>`;
    }
}

const htmlProductDecorator = new HTMLProductDecorator(product);
myDiv.innerHTML = htmlProductDecorator.getDetail();