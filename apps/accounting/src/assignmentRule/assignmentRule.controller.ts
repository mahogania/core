import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AssignmentRuleService } from "./assignmentRule.service";
import { AssignmentRuleControllerBase } from "./base/assignmentRule.controller.base";

@swagger.ApiTags("assignmentRules")
@common.Controller("assignmentRules")
export class AssignmentRuleController extends AssignmentRuleControllerBase {
  constructor(protected readonly service: AssignmentRuleService) {
    super(service);
  }
}
