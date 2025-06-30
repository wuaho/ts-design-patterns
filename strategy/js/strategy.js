class Sale { 

    constructor(strategy){
        this.strategy  = strategy
    }

    calculate(amount){
        return this.strategy.calculate(amount)
    }

    setStrategy(strategy){
        this.strategy = strategy
    }
}


class RetailSale{

    constructor(tax){
        this.tax = tax
    }

    calculate(amount){
        return amount + (this.tax  * amount)
    }
}

class DiscountSale{

    constructor(tax, discount){
        this.tax = tax
        this.discount = discount

    }

    calculate(amount){
        return amount + (this.tax  * amount) -  (this.discount  * amount)
    }
}


const retailSale = new RetailSale(0.2)
const sale = new Sale(retailSale)
console.log(sale.calculate(20));
const discountSale = new DiscountSale(0.2,0.3)
sale.setStrategy(discountSale)
console.log(sale.calculate(20));

