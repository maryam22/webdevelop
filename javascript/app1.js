
'user strict'


const loggedInUser = "sara";
const taxrate = 0.075;

class Cart{

    constructor(options){
        this.user = options.user
    }
    calcTax(rate){

        this.tax =this.total *rate ;
        return this
    }

    calcShipping() {
        if (this.total > 50) {
            this.shipping = 5;
        }
        else {
            this.shipping = 10;
        }
        return this;
    }


    calcGrandTotal() {

        if (this.tax && this.shipping) {

            this.grandTotal = this.total + this.tax + this.shipping;

        }

        return this;
    }
    logCart(){
     const that = this;
     return function (){

        console.log(that)
     };
    }
}

const currentCart = new Cart({ })