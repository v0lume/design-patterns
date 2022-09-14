import { Shipper } from "./Shipper";

export class PacificParcelShipper extends Shipper {
    protected rate = 0.51;

    constructor(zip: string) {
        super();

        if (![7,8,9].includes(+String(zip)[0])) {
            throw new Error(`Pacific Parcel doesn't support ${zip} zip`);
        }
    }
}