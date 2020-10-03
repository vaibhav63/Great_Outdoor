export class SalesReport {

    constructor(public salesReportId: number, public productId: string,
        public productName: string, public quantitySold: number, public totalSale: number) {

        this.salesReportId = salesReportId;
        this.productId = productId;
        this.productName = productName;
        this.quantitySold = quantitySold;
        this.totalSale = totalSale;
    }
}