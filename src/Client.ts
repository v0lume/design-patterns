import { Shipment } from "./Shipment";
import { State } from "./types";

export class Client {
    item: Shipment;

    receiveFromUser(state: State): void {
        const { shipmentID, weight, fromAddress, fromZipCode, toAddress, toZipCode } = state;

        const item = new Shipment(shipmentID, weight, fromAddress, fromZipCode, toAddress, toZipCode);
        this.item = item;
    }

    async sendToShipment(): Promise<void> {
        // simulate backend response
        return new Promise(resolve => setTimeout(() => resolve(this.item.ship()), 1000)).then(console.log);
    }
}