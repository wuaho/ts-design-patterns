interface Component {
  getDetail(): string;
}

class TSProductComponent implements Component {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getDetail() {
    return `${this.name}`;
  }
}

abstract class TSProductDecorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  public getDetail(): string {
    return this.component.getDetail();
  }
}

class TSCommercialInfoProductDecorator extends TSProductDecorator {
  private tradeName: string;
  private brand: string;

  constructor(component: Component, tradeName: string, brand: string) {
    super(component);
    this.tradeName = tradeName;
    this.brand = brand;
  }

  public getDetail(): string {
    return `${this.tradeName} ${this.brand} ` + super.getDetail();
  }
}

class StoreProduct extends TSProductDecorator {
  private price: number;

  constructor(component: Component, price: number) {
    super(component);
    this.price = price;
  }

  public getDetail(): string {
    return super.getDetail() + ` $ ${this.price}`;
  }
}

const tSProductComponent = new TSProductComponent("Cerveza");
const tSCommercialInfoProductDecorator = new TSCommercialInfoProductDecorator(
  tSProductComponent,
  "Radler",
  "Cruzcampo"
);
console.log(tSCommercialInfoProductDecorator.getDetail());

const storeProduct = new StoreProduct(tSCommercialInfoProductDecorator, 3.5);
console.log(storeProduct.getDetail());
