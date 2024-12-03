import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BankAccountTypeService } from "./bankAccountType.service";
import { BankAccountTypeControllerBase } from "./base/bankAccountType.controller.base";

@swagger.ApiTags("bankAccountTypes")
@common.Controller("bankAccountTypes")
export class BankAccountTypeController extends BankAccountTypeControllerBase {
  constructor(protected readonly service: BankAccountTypeService) {
    super(service);
  }
}
