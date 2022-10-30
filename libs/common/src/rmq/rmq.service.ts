import { Injectable } from '@nestjs/common';
import { RmqContext, RmqOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RmqService {
  constructor(private readonly configureService: ConfigService) {}

  getOptions(queue: string, noAck = false): RmqOptions {
    return {
      transport: Transport.RMQ,
      options: {
        urls: [this.configureService.get<string>('RABBIT_MQ_URI')],
        queue: this.configureService.get<string>(`RABBIT_MQ_${queue}_QUEUE`),
        noAck,
        persistent: true,
      },
    };
  }

  ack(context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();
    channel.acks(originalMessage);
  }
}
