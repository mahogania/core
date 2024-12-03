import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AssignmentRuleDayService } from "./assignmentRuleDay.service";
import { AssignmentRuleDayControllerBase } from "./base/assignmentRuleDay.controller.base";

@swagger.ApiTags("assignmentRuleDays")
@common.Controller("assignmentRuleDays")
export class AssignmentRuleDayController extends AssignmentRuleDayControllerBase {
  constructor(protected readonly service: AssignmentRuleDayService) {
    super(service);
  }
}
