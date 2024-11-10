import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BankClearanceDetailService } from "./bankClearanceDetail.service";
import { BankClearanceDetailControllerBase } from "./base/bankClearanceDetail.controller.base";

@swagger.ApiTags("bankClearanceDetails")
@common.Controller("bankClearanceDetails")
export class BankClearanceDetailController extends BankClearanceDetailControllerBase {
  constructor(protected readonly service: BankClearanceDetailService) {
    super(service);
  }
}
