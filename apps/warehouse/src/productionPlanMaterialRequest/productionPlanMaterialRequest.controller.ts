import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProductionPlanMaterialRequestService } from "./productionPlanMaterialRequest.service";
import { ProductionPlanMaterialRequestControllerBase } from "./base/productionPlanMaterialRequest.controller.base";

@swagger.ApiTags("productionPlanMaterialRequests")
@common.Controller("productionPlanMaterialRequests")
export class ProductionPlanMaterialRequestController extends ProductionPlanMaterialRequestControllerBase {
  constructor(
    protected readonly service: ProductionPlanMaterialRequestService
  ) {
    super(service);
  }
}
