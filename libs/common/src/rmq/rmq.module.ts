import { Module } from '@nestjs/common';
import { RmqService } from '@app/common/rmq/rmq.service';

@Module({
  providers: [RmqService],
  exports: [RmqService],
})
export class RmqModule {}
