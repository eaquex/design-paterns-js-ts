class EncoderTextAbstraction {

    constructor(encoder) {
        this.encoder = encoder;
    }

    encode(str) {
        return this.encoder.encode(str);
    }

    decode(str) {
        return this.encoder.decode(str);
    }
}

class Base64EncoderImplementor {

    encode(str) {
        return window.btoa(unescape(encodeURIComponent( str )));
    }

    decode(str) {
        return decodeURIComponent(escape(window.atob( str )));
    }
}

class HTMLEncoderImplementor {

    encode(str) {
        return str.split(".").reduce( (ac, e) => { return ac + `<p>${e.trim()}</p>` }, "");
    }

    decode(str) {
        return str.split("</p>").reduce( (ac, e) => { return e !=="" ? ac + e.replace("<p>", "") + ". ": ac + "" }, "")
    }
}


const encoder1 = new EncoderTextAbstraction(new Base64EncoderImplementor());
console.log(encoder1.encode("pato"));
console.log(encoder1.decode(encoder1.encode("pato")));
const encoder2 = new EncoderTextAbstraction(new HTMLEncoderImplementor());
console.log(encoder2.encode("Esto es un texto.  Aquí comienza otro.  Y aquí otro mas"));
console.log(encoder2.decode(encoder2.encode("Esto es un texto.  Aquí comienza otro.  Y aquí otro mas")));