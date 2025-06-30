interface IObserver<T> {
  refresh(value: T): void;
}

interface ISubject<T> {
  observers: IObserver<T>[];

  subscribe(observer: IObserver<T>): void;
  unsubscribe(observer: IObserver<T>): void;
  notify(value: T): void;
}

class TSObserver<T> implements IObserver<T> {
  fn: (value: T) => void;

  constructor(fn: (value: T) => void) {
    this.fn = fn;
  }

  refresh(value: T): void {
    this.fn(value);
  }
}

class TSSubject<T> implements ISubject<T> {
  observers: IObserver<T>[];

  constructor() {
    this.observers = [];
  }

  subscribe(observer: IObserver<T>): void {
    this.observers.push(observer);
  }
  unsubscribe(observer: IObserver<T>): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }
  notify(value: T): void {
    this.observers.forEach((observer) => observer.refresh(value));
  }
}

const subject = new TSSubject<string>();
const observer2 = new TSObserver<string>((n) =>
  console.log("Tu super string en lower case:", n.toLowerCase())
);

// O ELIGES UN TYPE O EL OTRO PARA UN SUBJECT CON SU SUBSCRIBER
// const subject = new TSSubject<number>();
// const observer1 = new TSObserver<number>((n) =>
//   console.log("Tu super numero:", n)
// );

subject.subscribe(observer2);
subject.notify("ALGUIEN MUY ENFADADO");
