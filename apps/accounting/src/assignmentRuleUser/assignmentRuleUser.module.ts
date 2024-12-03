import { Module } from "@nestjs/common";
import { AssignmentRuleUserModuleBase } from "./base/assignmentRuleUser.module.base";
import { AssignmentRuleUserService } from "./assignmentRuleUser.service";
import { AssignmentRuleUserController } from "./assignmentRuleUser.controller";
import { AssignmentRuleUserResolver } from "./assignmentRuleUser.resolver";

@Module({
  imports: [AssignmentRuleUserModuleBase],
  controllers: [AssignmentRuleUserController],
  providers: [AssignmentRuleUserService, AssignmentRuleUserResolver],
  exports: [AssignmentRuleUserService],
})
export class AssignmentRuleUserModule {}
