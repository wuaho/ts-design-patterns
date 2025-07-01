class ProductComponent {
  constructor(name) {
    this.name = name;
  }

  getDetail() {
    return `${this.name}`;
  }
}

class ProductDecorator {
  constructor(productComponent) {
    this.productComponent = productComponent;
  }

  getDetail() {
    return this.productComponent.getDetail();
  }
}

class CommercialInfoProductDecorator extends ProductDecorator {
  constructor(productComponent, tradename, brand) {
    super(productComponent);

    this.tradename = tradename;
    this.brand = brand;
  }

  getDetail() {
    return `${this.tradename} ${this.brand} ` + super.getDetail();
  }
}

class StoreProductDecorator extends ProductDecorator {
  constructor(productComponent, price) {
    super(productComponent);

    this.price = price;
  }

  getDetail() {
    return super.getDetail() + ` $ ${this.price}`;
  }
}

class HTMLProductDecorator extends ProductDecorator {
  getDetail() {
    return `<h1> Información de la cerveza
    </h1>
    <h2>${super.getDetail()}</h2>`;
  }
}

const productComponent = new ProductComponent("Cerveza");
console.log(productComponent.getDetail());

const commercialInfoProductDecorator = new CommercialInfoProductDecorator(
  productComponent,
  "Radler",
  "Cruzcampo"
);
console.log(commercialInfoProductDecorator.getDetail());

const storeProductDecorator = new StoreProductDecorator(
  commercialInfoProductDecorator,
  3.9
);
console.log(storeProductDecorator.getDetail());

const htmlProductDecorator = new HTMLProductDecorator(storeProductDecorator);
divContainer.innerHTML = htmlProductDecorator.getDetail();
