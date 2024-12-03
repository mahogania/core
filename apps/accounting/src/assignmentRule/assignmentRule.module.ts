import { Module } from "@nestjs/common";
import { AssignmentRuleModuleBase } from "./base/assignmentRule.module.base";
import { AssignmentRuleService } from "./assignmentRule.service";
import { AssignmentRuleController } from "./assignmentRule.controller";
import { AssignmentRuleResolver } from "./assignmentRule.resolver";

@Module({
  imports: [AssignmentRuleModuleBase],
  controllers: [AssignmentRuleController],
  providers: [AssignmentRuleService, AssignmentRuleResolver],
  exports: [AssignmentRuleService],
})
export class AssignmentRuleModule {}
