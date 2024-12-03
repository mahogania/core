import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StockReconciliationItemService } from "./stockReconciliationItem.service";
import { StockReconciliationItemControllerBase } from "./base/stockReconciliationItem.controller.base";

@swagger.ApiTags("stockReconciliationItems")
@common.Controller("stockReconciliationItems")
export class StockReconciliationItemController extends StockReconciliationItemControllerBase {
  constructor(protected readonly service: StockReconciliationItemService) {
    super(service);
  }
}
