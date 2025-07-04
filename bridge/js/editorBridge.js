class Editor {
  constructor(implementor) {
    this.implementor = implementor;
  }

  print(width, height, color) {
    this.implementor.setWidth(width);
    this.implementor.setHeight(height);
    this.implementor.setColor(color);
    this.implementor.print();
  }
}

class EditorWithErase extends Editor {
  constructor(implementor) {
    super(implementor);
  }

  clear() {
    this.implementor.setWidth(0);
    this.implementor.setHeight(0);
    this.implementor.print();
  }
}

class HtmlPainter {
  constructor(container) {
    this.container = container;
    this.width = "1px";
    this.height = "1px";
    this.color = "#000";
  }

  setWidth(width) {
    this.width = width + "px";
  }

  setHeight(height) {
    this.height = height + "px";
  }

  setColor(color) {
    this.color = color;
  }

  print() {
    this.container.innerHTML = `<div
    style="width:${this.width};height:${this.height};background:${this.color};">
    </div>`;
  }
}

class CanvasPainter {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.width = 1;
    this.height = 1;
    this.color = "#000";
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  setColor(color) {
    this.color = color;
  }

  print() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(0, 0, this.width, this.height);
  }
}

// Para utilizar el implementador de div
// const editor = new Editor(new HtmlPainter(content));

// Para utilizar el implementador de Canvas
// const editor = new Editor(new CanvasPainter(canvas));

// Para utilizar la abstraccion que tiene boton de borrar
const editor = new EditorWithErase(new HtmlPainter(content));

rangeEditor.addEventListener("input", (e) => {
  const width = e.target.value;
  const height = e.target.value;
  const color = colorEditor.value;
  editor.print(width, height, color);
});

colorEditor.addEventListener("input", (e) => {
  const width = rangeEditor.value;
  const height = rangeEditor.value;
  const color = e.target.value;
  editor.print(width, height, color);
});

btn.addEventListener("click", () => {
  editor.clear();
});
