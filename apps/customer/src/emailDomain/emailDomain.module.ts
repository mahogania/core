import { Module } from "@nestjs/common";
import { EmailDomainModuleBase } from "./base/emailDomain.module.base";
import { EmailDomainService } from "./emailDomain.service";
import { EmailDomainController } from "./emailDomain.controller";
import { EmailDomainResolver } from "./emailDomain.resolver";

@Module({
  imports: [EmailDomainModuleBase],
  controllers: [EmailDomainController],
  providers: [EmailDomainService, EmailDomainResolver],
  exports: [EmailDomainService],
})
export class EmailDomainModule {}
