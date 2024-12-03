import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ModeOfPaymentAccountService } from "./modeOfPaymentAccount.service";
import { ModeOfPaymentAccountControllerBase } from "./base/modeOfPaymentAccount.controller.base";

@swagger.ApiTags("modeOfPaymentAccounts")
@common.Controller("modeOfPaymentAccounts")
export class ModeOfPaymentAccountController extends ModeOfPaymentAccountControllerBase {
  constructor(protected readonly service: ModeOfPaymentAccountService) {
    super(service);
  }
}
