class DocumentContext {
  constructor() {
    this.content = "";
    this.state = new BlankState();
  }

  setState(state) {
    this.state = state;
  }

  write(text) {
    this.state.write(this, text);
  }
}

class BlankState {
  write(documentContext, text) {
    documentContext.content = text;
    documentContext.setState(new WrittenState());
  }
}

class WrittenState {
  write(documentContext, text) {
    documentContext.content += " " + text;
  }
}

class ApprovedState {
  write() {
    console.error(
      "A la verga, no trates de escribir en este documento wey que esta en Approved"
    );
  }
}

const documentContext = new DocumentContext();
console.log(documentContext.state);

documentContext.write("hola paloma");
console.log(documentContext.content);
console.log(documentContext.state);

documentContext.write("adios caracol");
console.log(documentContext.content);
console.log(documentContext.state);

documentContext.setState(new ApprovedState());
documentContext.write("vamonos atomos");
console.log(documentContext.state);
