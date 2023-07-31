import nats, { Stan } from "node-nats-streaming";

class NatsClient {
    private _client?: Stan;

    get client() {
        if (!this._client) {
            throw new Error('Cannot access NATS client before connecting')
        }

        return this._client;
    }

    connect(clusterId: string, clientId: string, url: string) {
        this._client = nats.connect(clusterId, clientId, { url });

        return new Promise<void>((resolve, reject) => {

            this.client.on('connect', () => {
                console.log('connected to Nats')
                resolve();
            });
            this.client.on('error', (err) => {
                reject(err)
            })
        })
    }

}

export const natsClient = new NatsClient();