import { Shipper } from "./Shipper";

export class ChicagoSprintShipper extends Shipper {
    protected rate = 0.42;

    constructor(zip: string) {
        super();

        if (![4,5,6].includes(+String(zip)[0])) {
            throw new Error(`Chicago Sprint doesn't support ${zip} zip`);
        }
    }
}