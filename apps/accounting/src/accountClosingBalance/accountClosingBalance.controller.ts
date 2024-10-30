import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AccountClosingBalanceService } from "./accountClosingBalance.service";
import { AccountClosingBalanceControllerBase } from "./base/accountClosingBalance.controller.base";

@swagger.ApiTags("accountClosingBalances")
@common.Controller("accountClosingBalances")
export class AccountClosingBalanceController extends AccountClosingBalanceControllerBase {
  constructor(protected readonly service: AccountClosingBalanceService) {
    super(service);
  }
}
