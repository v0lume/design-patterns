import { AirEastShipper } from "./shippers/AirEastShipper";
import { ChicagoSprintShipper } from "./shippers/ChicagoSprintShipper";
import { PacificParcelShipper } from "./shippers/PacificParcelShipper";
import { Shipper } from "./shippers/Shipper";

let id = 0;

export class Shipment {
    protected id: number;
    protected weight: number;

    protected fromAddress: string;
    protected fromZipCode?: string;

    protected toAddress: string;
    protected toZipCode: string;

    constructor(shipmentId, weight, fromAddress, fromZipCode: string | undefined = undefined, toAddress, toZipCode) {
        const nextId = this.generateId(shipmentId);

        id = nextId;
        this.id = nextId;

        this.weight = weight;

        this.fromAddress = fromAddress;
        this.fromZipCode = fromZipCode;
        this.toAddress = toAddress;
        this.toZipCode = toZipCode;
    }

    getInstance() {
        return this;
    }

    generateId(defaultShipmentId = 0): number {
        const nextId = defaultShipmentId === 0 ? id + 1 : defaultShipmentId;

        return nextId;
    }

    getShipmentID(): number {
        return this.id;
    }

    getFrom(): string {
        return `${this.fromZipCode ? this.fromZipCode + ' ' : ''}${this.fromAddress}`;
    }

    getTo(): string {
        return `${this.toZipCode} ${this.toAddress}`;
    }

    getShipper(): Shipper {
        switch (true) {
            case this.fromZipCode && [1,2,3].includes(+String(this.fromZipCode)[0]):
            default:
                return new AirEastShipper(this.fromZipCode);
            case this.fromZipCode && [4,5,6].includes(+String(this.fromZipCode)[0]):
                return new ChicagoSprintShipper(this.fromZipCode as string);
            case this.fromZipCode && [7,8,9].includes(+String(this.fromZipCode)[0]):
                return new PacificParcelShipper(this.fromZipCode as string);
        }
    }

    getPrice(): number {
        return this.getShipper().getCost(this.weight);
    }

    ship(): string {
        return `Shipment #${this.getShipmentID()}: from ${this.getFrom()}, to ${this.getTo()}. Price: ${this.getPrice()}`
    }
}