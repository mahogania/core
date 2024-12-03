import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StockReconciliationService } from "./stockReconciliation.service";
import { StockReconciliationControllerBase } from "./base/stockReconciliation.controller.base";

@swagger.ApiTags("stockReconciliations")
@common.Controller("stockReconciliations")
export class StockReconciliationController extends StockReconciliationControllerBase {
  constructor(protected readonly service: StockReconciliationService) {
    super(service);
  }
}
