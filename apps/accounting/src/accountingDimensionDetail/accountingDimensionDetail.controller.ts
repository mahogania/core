import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AccountingDimensionDetailService } from "./accountingDimensionDetail.service";
import { AccountingDimensionDetailControllerBase } from "./base/accountingDimensionDetail.controller.base";

@swagger.ApiTags("accountingDimensionDetails")
@common.Controller("accountingDimensionDetails")
export class AccountingDimensionDetailController extends AccountingDimensionDetailControllerBase {
  constructor(protected readonly service: AccountingDimensionDetailService) {
    super(service);
  }
}
