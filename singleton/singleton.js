class Singleton {
  static getInstance() {
    return Singleton.instance;
  }
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
  }
}

const singleton = new Singleton();
const singleton2 = new Singleton();
