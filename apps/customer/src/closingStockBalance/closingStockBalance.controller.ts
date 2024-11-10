import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClosingStockBalanceService } from "./closingStockBalance.service";
import { ClosingStockBalanceControllerBase } from "./base/closingStockBalance.controller.base";

@swagger.ApiTags("closingStockBalances")
@common.Controller("closingStockBalances")
export class ClosingStockBalanceController extends ClosingStockBalanceControllerBase {
  constructor(protected readonly service: ClosingStockBalanceService) {
    super(service);
  }
}
