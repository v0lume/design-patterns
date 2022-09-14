let id = 0;

export class Shipment {
    protected id: number;
    protected weight: number;
    protected costRate: number;

    protected fromAddress: string;
    protected fromZipCode: string;

    protected toAddress: string;
    protected toZipCode: string;

    constructor(shipmentId, weight, fromAddress, fromZipCode, toAddress, toZipCode, costRate = 0.39) {
        const nextId = this.generateId(shipmentId);

        id = nextId;
        this.id = nextId;

        this.weight = weight;
        this.costRate = costRate;

        this.fromAddress = fromAddress;
        this.fromZipCode = fromZipCode;
        this.toAddress = toAddress;
        this.toZipCode = toZipCode;
    }

    getInstance() {
        return this;
    }

    generateId(defaultShipmentId = 0): number {
        const nextId = defaultShipmentId ?? id + 1;

        return nextId;
    }

    getShipmentID(): number {
        return this.id;
    }

    getFrom(): string {
        return `${this.fromZipCode} ${this.fromAddress}`;
    }

    getTo(): string {
        return `${this.toZipCode} ${this.toAddress}`;
    }

    getPrice(): number {
        return this.weight * this.costRate;
    }

    ship(): string {
        return `Shipment #${this.getShipmentID()}: from ${this.getFrom()}, to ${this.getTo()}. Price: ${this.getPrice()}`
    }
}