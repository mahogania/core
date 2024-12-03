import { Module } from "@nestjs/common";
import { EmailDigestRecipientModuleBase } from "./base/emailDigestRecipient.module.base";
import { EmailDigestRecipientService } from "./emailDigestRecipient.service";
import { EmailDigestRecipientController } from "./emailDigestRecipient.controller";
import { EmailDigestRecipientResolver } from "./emailDigestRecipient.resolver";

@Module({
  imports: [EmailDigestRecipientModuleBase],
  controllers: [EmailDigestRecipientController],
  providers: [EmailDigestRecipientService, EmailDigestRecipientResolver],
  exports: [EmailDigestRecipientService],
})
export class EmailDigestRecipientModule {}
