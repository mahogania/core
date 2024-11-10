import { Module } from "@nestjs/common";
import { AuthorizationRuleModuleBase } from "./base/authorizationRule.module.base";
import { AuthorizationRuleService } from "./authorizationRule.service";
import { AuthorizationRuleController } from "./authorizationRule.controller";
import { AuthorizationRuleResolver } from "./authorizationRule.resolver";

@Module({
  imports: [AuthorizationRuleModuleBase],
  controllers: [AuthorizationRuleController],
  providers: [AuthorizationRuleService, AuthorizationRuleResolver],
  exports: [AuthorizationRuleService],
})
export class AuthorizationRuleModule {}
