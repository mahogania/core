import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BankGuaranteeService } from "./bankGuarantee.service";
import { BankGuaranteeControllerBase } from "./base/bankGuarantee.controller.base";

@swagger.ApiTags("bankGuarantees")
@common.Controller("bankGuarantees")
export class BankGuaranteeController extends BankGuaranteeControllerBase {
  constructor(protected readonly service: BankGuaranteeService) {
    super(service);
  }
}
