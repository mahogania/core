import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AccountingDimensionService } from "./accountingDimension.service";
import { AccountingDimensionControllerBase } from "./base/accountingDimension.controller.base";

@swagger.ApiTags("accountingDimensions")
@common.Controller("accountingDimensions")
export class AccountingDimensionController extends AccountingDimensionControllerBase {
  constructor(protected readonly service: AccountingDimensionService) {
    super(service);
  }
}
