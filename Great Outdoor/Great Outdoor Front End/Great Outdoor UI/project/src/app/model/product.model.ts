
export class Product {

    constructor(public productId: string, public productName: string, public productPrice: number,
        public productColor: string, public productCategory: string,
        public productQuantity: number, public productManufacturer: string,
        public productSpecification: string, public productImage: string) {

        this.productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productColor = productColor;
        this.productCategory = productCategory;
        this.productQuantity = productQuantity;
        this.productManufacturer = productManufacturer;
        this.productSpecification = productSpecification;
        this.productImage = productImage;
    }
}