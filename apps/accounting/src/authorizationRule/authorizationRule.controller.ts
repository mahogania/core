import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AuthorizationRuleService } from "./authorizationRule.service";
import { AuthorizationRuleControllerBase } from "./base/authorizationRule.controller.base";

@swagger.ApiTags("authorizationRules")
@common.Controller("authorizationRules")
export class AuthorizationRuleController extends AuthorizationRuleControllerBase {
  constructor(protected readonly service: AuthorizationRuleService) {
    super(service);
  }
}
