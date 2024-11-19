import { Module } from "@nestjs/common";
import { AssignmentRuleDayModuleBase } from "./base/assignmentRuleDay.module.base";
import { AssignmentRuleDayService } from "./assignmentRuleDay.service";
import { AssignmentRuleDayController } from "./assignmentRuleDay.controller";
import { AssignmentRuleDayResolver } from "./assignmentRuleDay.resolver";

@Module({
  imports: [AssignmentRuleDayModuleBase],
  controllers: [AssignmentRuleDayController],
  providers: [AssignmentRuleDayService, AssignmentRuleDayResolver],
  exports: [AssignmentRuleDayService],
})
export class AssignmentRuleDayModule {}
