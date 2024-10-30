import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AssignmentRuleUserService } from "./assignmentRuleUser.service";
import { AssignmentRuleUserControllerBase } from "./base/assignmentRuleUser.controller.base";

@swagger.ApiTags("assignmentRuleUsers")
@common.Controller("assignmentRuleUsers")
export class AssignmentRuleUserController extends AssignmentRuleUserControllerBase {
  constructor(protected readonly service: AssignmentRuleUserService) {
    super(service);
  }
}
