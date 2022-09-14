import { Shipper } from "./Shipper";

export class AirEastShipper extends Shipper {
    protected rate = 0.39;

    constructor(zip?: string) {
        super();

        if (!!zip && ![1,2,3].includes(+String(zip)[0])) {
            throw new Error(`Air East doesn't support ${zip} zip`);
        }
    }
}