import { Module } from "@nestjs/common";
import { EmailRuleModuleBase } from "./base/emailRule.module.base";
import { EmailRuleService } from "./emailRule.service";
import { EmailRuleController } from "./emailRule.controller";
import { EmailRuleResolver } from "./emailRule.resolver";

@Module({
  imports: [EmailRuleModuleBase],
  controllers: [EmailRuleController],
  providers: [EmailRuleService, EmailRuleResolver],
  exports: [EmailRuleService],
})
export class EmailRuleModule {}
