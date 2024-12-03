import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProductionPlanSubAssemblyItemService } from "./productionPlanSubAssemblyItem.service";
import { ProductionPlanSubAssemblyItemControllerBase } from "./base/productionPlanSubAssemblyItem.controller.base";

@swagger.ApiTags("productionPlanSubAssemblyItems")
@common.Controller("productionPlanSubAssemblyItems")
export class ProductionPlanSubAssemblyItemController extends ProductionPlanSubAssemblyItemControllerBase {
  constructor(
    protected readonly service: ProductionPlanSubAssemblyItemService
  ) {
    super(service);
  }
}
