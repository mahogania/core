import { Module } from "@nestjs/common";
import { EmailFlagQueueModuleBase } from "./base/emailFlagQueue.module.base";
import { EmailFlagQueueService } from "./emailFlagQueue.service";
import { EmailFlagQueueController } from "./emailFlagQueue.controller";
import { EmailFlagQueueResolver } from "./emailFlagQueue.resolver";

@Module({
  imports: [EmailFlagQueueModuleBase],
  controllers: [EmailFlagQueueController],
  providers: [EmailFlagQueueService, EmailFlagQueueResolver],
  exports: [EmailFlagQueueService],
})
export class EmailFlagQueueModule {}
