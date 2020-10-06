// model for growth report
export class GrowthReport {

    constructor(public growthReportId: number, public currentdate: string,
        public revenue: number, public amountChange: number, public percentageGrowth: number,
        public colorCode: string) {

        this.growthReportId = growthReportId;
        this.currentdate = currentdate;
        this.revenue = revenue;
        this.amountChange = amountChange;
        this.percentageGrowth = percentageGrowth;
        this.colorCode = colorCode;
    }
}