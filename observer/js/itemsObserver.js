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

class ItemsSubject extends Subject {
  constructor() {
    super();
    this.data = [];
  }

  add(item) {
    this.data.push(item);
    this.notify(this.data);
  }
}

class HtmlElementObserver {
  constructor(element) {
    this.element = element;
  }
  refresh(data) {
    this.element.innerHTML = data.reduce((ac, e) => {
      return (
        ac +
        `<p>
        ${e}
        </p>`
      );
    }, "");
  }
}

const items = new ItemsSubject();
const div1Observer = new HtmlElementObserver(div1);

items.subscribe(div1Observer);

function add() {
  const name = txtName.value;
  items.add(name);
}
