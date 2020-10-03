
export class Order {

    constructor(public id: number, public orderId: string, public userId: string,
        public products: String, public totalPrice: number, public totalQuantity: number,
        public addressId: string, public dispatchDate: string, public arrivalDate: string) {

        this.id = id;
        this.orderId = orderId;
        this.userId = userId;
        this.products = products;
        this.totalPrice = totalPrice;
        this.totalQuantity = totalQuantity;
        this.addressId = addressId;
        this.dispatchDate = dispatchDate;
        this.arrivalDate = arrivalDate;
    }
}