import { Module } from "@nestjs/common";
import { EmailQueueRecipientModuleBase } from "./base/emailQueueRecipient.module.base";
import { EmailQueueRecipientService } from "./emailQueueRecipient.service";
import { EmailQueueRecipientController } from "./emailQueueRecipient.controller";
import { EmailQueueRecipientResolver } from "./emailQueueRecipient.resolver";

@Module({
  imports: [EmailQueueRecipientModuleBase],
  controllers: [EmailQueueRecipientController],
  providers: [EmailQueueRecipientService, EmailQueueRecipientResolver],
  exports: [EmailQueueRecipientService],
})
export class EmailQueueRecipientModule {}
