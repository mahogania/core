import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProductionPlanService } from "./productionPlan.service";
import { ProductionPlanControllerBase } from "./base/productionPlan.controller.base";

@swagger.ApiTags("productionPlans")
@common.Controller("productionPlans")
export class ProductionPlanController extends ProductionPlanControllerBase {
  constructor(protected readonly service: ProductionPlanService) {
    super(service);
  }
}
