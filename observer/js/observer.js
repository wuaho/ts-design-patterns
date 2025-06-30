class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(data) {
    this.observers.forEach((observer) => observer.refresh(data));
  }
}

class Observer {
  constructor(fn) {
    this.fn = fn;
  }

  refresh(data) {
    this.fn(data);
  }
}

const s = new Subject();
const o1 = new Observer((event) =>
  console.log("Me ha llegado este evento:", event)
);
const o2 = new Observer((event) => (div1.innerHTML = event));

s.subscribe(o1);
s.subscribe(o2);

function change() {
  s.notify(myText.value);
}
