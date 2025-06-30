interface Strategy {
  login(user: string, password: string): boolean;
}

class LoginContext {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  login(user: string, password: string): boolean {
    return this.strategy.login(user, password);
  }
}

class DBLogin implements Strategy {
  login(user: string, password: string): boolean {
    console.log("Entrando en la base de datos");
    return user === "admin" && password === "entra";
  }
}

class WebLogin implements Strategy {
  login(user: string, password: string): boolean {
    console.log("Entrando en la web");
    return user === "browser" && password === "";
  }
}

const auth = new LoginContext(new DBLogin());
console.log(auth.login("admin", "entra"));
console.log(auth.login("admin", "nopasas"));
auth.setStrategy(new WebLogin());
console.log(auth.login("browser", ""));
