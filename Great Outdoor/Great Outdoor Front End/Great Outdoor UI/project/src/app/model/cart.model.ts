// model for cart
export class Cart {

    constructor(public cartId: number, public userId: string, public productId: string,
        public cartItemPrice: number, public quantity: number) {

        this.cartId = cartId;
        this.userId = userId;
        this.productId = productId;
        this.cartItemPrice = cartItemPrice;
        this.quantity = quantity;

    }
}