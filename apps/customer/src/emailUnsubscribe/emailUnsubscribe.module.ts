import { Module } from "@nestjs/common";
import { EmailUnsubscribeModuleBase } from "./base/emailUnsubscribe.module.base";
import { EmailUnsubscribeService } from "./emailUnsubscribe.service";
import { EmailUnsubscribeController } from "./emailUnsubscribe.controller";
import { EmailUnsubscribeResolver } from "./emailUnsubscribe.resolver";

@Module({
  imports: [EmailUnsubscribeModuleBase],
  controllers: [EmailUnsubscribeController],
  providers: [EmailUnsubscribeService, EmailUnsubscribeResolver],
  exports: [EmailUnsubscribeService],
})
export class EmailUnsubscribeModule {}
