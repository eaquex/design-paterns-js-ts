interface IObserver<Type> {
    refresh(value: Type) : void;
}

interface ISubject<Type> {
    observers: IObserver<Type>[];

    subscribe(observer: IObserver<Type>): void;
    unsubscribe(observer: IObserver<Type>): void;
    notify(value: Type): void;
}

class Subject<Type> implements ISubject<Type> {
    observers: IObserver<Type>[];

    constructor() {
        this.observers = [];
    }

    subscribe(observer: IObserver<Type>) {
        this.observers.push(observer);
    }

    unsubscribe(observer: IObserver<Type>) {
        this.observers = this.observers.filter( current => current !== observer );
    }

    notify(data: Type) {
        this.observers.forEach( current => current.refresh(data));
    }    
}

class Observer<Type> implements IObserver<Type> {
    private fn: (value: Type) => void

    constructor(fn: (value: Type) => void) {
        this.fn = fn
    }

    refresh(value: Type): void {
        this.fn(value)
    }
}

const subject = new Subject<number>();
const observer1 = new Observer<number>((number) => console.log(`Hello ${number}`));
const observer2 = new Observer<number>((number) => console.log(`Hi ${number}`));

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.notify(1.2);
subject.notify(30);

const subjectString = new Subject<string>();
const observer1String = new Observer<string>((value) => console.log(`${value.toUpperCase()}`))
const observer2String = new Observer<string>((value) => console.log(`${value.toLowerCase()}`))

subjectString.subscribe(observer1String);
subjectString.subscribe(observer2String);

subjectString.notify("Edgar");
subjectString.notify("Quex");