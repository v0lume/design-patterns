import { Client } from "./Client";
import { State } from "./types";

const mockedState: State = {
    shipmentID: 0,
    weight: 100,
    fromAddress: 'test location',
    toAddress: 'localhost',
    toZipCode: '127.0.0.1',
};;

describe('Client', () => {
    it('should generate unique id for state.shipmentID === 0', async () => {
        console.log = jest.fn();

        const client = new Client();
        const state = mockedState;

        client.receiveFromUser(state);
        await client.sendToShipment();

        expect(console.log).toHaveBeenCalledWith(`Shipment #1: from ${state.fromAddress}, to ${state.toZipCode} ${state.toAddress}, Price: 39`);
    });

    it('should return proper shipment string for undefined zip', async () => {
        console.log = jest.fn();

        const client = new Client();
        const state: State = {
            ...mockedState,
            shipmentID: 2,
        };

        client.receiveFromUser(state);
        await client.sendToShipment();

        expect(console.log).toHaveBeenCalledWith(`Shipment #${state.shipmentID}: from ${state.fromAddress}, to ${state.toZipCode} ${state.toAddress}, Price: 39`);
    });

    it('should return Chicago Sprint shipment string for 45094 zip', async () => {
        console.log = jest.fn();

        const client = new Client();
        const state: State = {
            ...mockedState,
            shipmentID: 2,
            fromZipCode: '45094',
        };

        client.receiveFromUser(state);
        await client.sendToShipment();

        expect(console.log).toHaveBeenCalledWith(`Shipment #${state.shipmentID}: from ${state.fromZipCode} ${state.fromAddress}, to ${state.toZipCode} ${state.toAddress}, Price: 42`);
    });

    it('should return Pacific Parcel shipment string for 78921 zip', async () => {
        console.log = jest.fn();

        const client = new Client();
        const state: State = {
            ...mockedState,
            shipmentID: 2,
            fromZipCode: '78921',
        };

        client.receiveFromUser(state);
        await client.sendToShipment();

        expect(console.log).toHaveBeenCalledWith(`Shipment #${state.shipmentID}: from ${state.fromZipCode} ${state.fromAddress}, to ${state.toZipCode} ${state.toAddress}, Price: 51`);
    });
});