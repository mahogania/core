import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ApplicableOnAccountService } from "./applicableOnAccount.service";
import { ApplicableOnAccountControllerBase } from "./base/applicableOnAccount.controller.base";

@swagger.ApiTags("applicableOnAccounts")
@common.Controller("applicableOnAccounts")
export class ApplicableOnAccountController extends ApplicableOnAccountControllerBase {
  constructor(protected readonly service: ApplicableOnAccountService) {
    super(service);
  }
}
