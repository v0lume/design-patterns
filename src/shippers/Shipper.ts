
export class Shipper {
    protected rate = 0;

    getInstance() {
        return this;
    }

    getCost(weight: number): number {
        return weight * this.rate;
    }
}