import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmailAccountService } from "./emailAccount.service";
import { EmailAccountControllerBase } from "./base/emailAccount.controller.base";

@swagger.ApiTags("emailAccounts")
@common.Controller("emailAccounts")
export class EmailAccountController extends EmailAccountControllerBase {
  constructor(protected readonly service: EmailAccountService) {
    super(service);
  }
}
