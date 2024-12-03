import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmailRuleService } from "./emailRule.service";
import { EmailRuleControllerBase } from "./base/emailRule.controller.base";

@swagger.ApiTags("emailRules")
@common.Controller("emailRules")
export class EmailRuleController extends EmailRuleControllerBase {
  constructor(protected readonly service: EmailRuleService) {
    super(service);
  }
}
