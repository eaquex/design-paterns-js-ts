class ClientComponent {
    constructor(url) {
        this.url = url;
    }

    async getData() {
        const res = await fetch(this.url);
        const data = await res.json();
        return data;
    }
}

class ClientDecorator {
    constructor(clientComponent) {
        this.clientComponent = clientComponent;
    }

    async getData() {
        return await this.clientComponent.getData();
    }
}

class UpperCaseClientDecorator extends ClientDecorator {

    async getData() {
        const data = await super.getData();
        const newData = data.map( item => {
            item.title = item.title.toUpperCase();
            return item;
        })

        return newData;
    }
}

class HtmlClientDecorator extends ClientDecorator {

    async getData() {
        const data = await super.getData();
        const newData = data.map( item => {
            item.title = `<h1>${item.title}</h1>`;
            item.thumbnailUrl = `<img src="${item.thumbnailUrl}">`;            
            return item;
        })

        return newData;
    }
}

(async () => {
    
    const url="https://jsonplaceholder.typicode.com/photos";
    const client = new ClientComponent(url);
    const data = await client.getData();
    //console.log(data);

    const upperClient = new UpperCaseClientDecorator(client);
    const dataUpper= await upperClient.getData();
    //console.log(dataUpper);

    const htmlClient = new HtmlClientDecorator(upperClient);
    const dataHtml = await htmlClient.getData();
    
    divContent1.innerHTML = dataHtml.reduce( (ac, item) => {
        return ac + item.title + item.thumbnailUrl;
    }, "")

    const htmlClient2 = new HtmlClientDecorator(client);
    const dataHtmlNormal = await htmlClient2.getData();
    divContent2.innerHTML = dataHtmlNormal.reduce( (ac, item) => {
        return ac + item.title + item.thumbnailUrl;
    }, "")    
})();