import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BankAccountSubtypeService } from "./bankAccountSubtype.service";
import { BankAccountSubtypeControllerBase } from "./base/bankAccountSubtype.controller.base";

@swagger.ApiTags("bankAccountSubtypes")
@common.Controller("bankAccountSubtypes")
export class BankAccountSubtypeController extends BankAccountSubtypeControllerBase {
  constructor(protected readonly service: BankAccountSubtypeService) {
    super(service);
  }
}
