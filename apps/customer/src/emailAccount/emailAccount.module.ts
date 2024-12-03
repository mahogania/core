import { Module } from "@nestjs/common";
import { EmailAccountModuleBase } from "./base/emailAccount.module.base";
import { EmailAccountService } from "./emailAccount.service";
import { EmailAccountController } from "./emailAccount.controller";
import { EmailAccountResolver } from "./emailAccount.resolver";

@Module({
  imports: [EmailAccountModuleBase],
  controllers: [EmailAccountController],
  providers: [EmailAccountService, EmailAccountResolver],
  exports: [EmailAccountService],
})
export class EmailAccountModule {}
