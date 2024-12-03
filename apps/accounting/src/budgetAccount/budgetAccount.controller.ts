import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BudgetAccountService } from "./budgetAccount.service";
import { BudgetAccountControllerBase } from "./base/budgetAccount.controller.base";

@swagger.ApiTags("budgetAccounts")
@common.Controller("budgetAccounts")
export class BudgetAccountController extends BudgetAccountControllerBase {
  constructor(protected readonly service: BudgetAccountService) {
    super(service);
  }
}
