import { AMQPClient } from "../data/contracts/amqp-client";

var amqp = require('amqplib/callback_api');

export class AMQPClientAdapter implements AMQPClient {

    generateUuid() {
        return Math.random().toString() +
            Math.random().toString() +
            Math.random().toString();
    }


    async send(queue: string, payload: any): Promise<any> {
        return await new Promise((resolve, reject) => amqp.connect('amqp://localhost', function (error0, connection) {
            if (error0) {
                reject(error0);
            }
            connection.createChannel(function (error1, channel) {
                if (error1) {
                    reject(error1);
                }
                channel.assertQueue('', {
                    exclusive: true
                }, function (error2, q) {
                    if (error2) {
                        reject(error2);
                    }
                    var correlationId = this.generateUuid();

                    channel.consume(q.queue, function (msg) {
                        if (msg.properties.correlationId == correlationId) {
                            resolve(msg.content ? JSON.parse(msg.content.toString()) : null)
                        }
                    }, {
                        noAck: true
                    });

                    channel.sendToQueue(queue,
                        Buffer.from(JSON.stringify(payload)), {
                        correlationId: correlationId,
                        replyTo: q.queue
                    });

                    setTimeout(() => {
                        connection.close()
                    }, 500)
                });
            });
        }))
    }
}