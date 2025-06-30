class SingletonTS {
  private static instance: SingletonTS;

  random: number;

  private constructor() {
    this.random = Math.random();
  }

  public static getInstance(): SingletonTS {
    if (!this.instance) {
      this.instance = new SingletonTS();
    }
    return this.instance;
  }
}

const singletonTS = SingletonTS.getInstance();
