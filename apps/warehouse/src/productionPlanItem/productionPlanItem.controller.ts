import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProductionPlanItemService } from "./productionPlanItem.service";
import { ProductionPlanItemControllerBase } from "./base/productionPlanItem.controller.base";

@swagger.ApiTags("productionPlanItems")
@common.Controller("productionPlanItems")
export class ProductionPlanItemController extends ProductionPlanItemControllerBase {
  constructor(protected readonly service: ProductionPlanItemService) {
    super(service);
  }
}
