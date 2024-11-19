import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BankAccountService } from "./bankAccount.service";
import { BankAccountControllerBase } from "./base/bankAccount.controller.base";

@swagger.ApiTags("bankAccounts")
@common.Controller("bankAccounts")
export class BankAccountController extends BankAccountControllerBase {
  constructor(protected readonly service: BankAccountService) {
    super(service);
  }
}
