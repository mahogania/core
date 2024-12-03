import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProductionPlanMaterialRequestWarehouseService } from "./productionPlanMaterialRequestWarehouse.service";
import { ProductionPlanMaterialRequestWarehouseControllerBase } from "./base/productionPlanMaterialRequestWarehouse.controller.base";

@swagger.ApiTags("productionPlanMaterialRequestWarehouses")
@common.Controller("productionPlanMaterialRequestWarehouses")
export class ProductionPlanMaterialRequestWarehouseController extends ProductionPlanMaterialRequestWarehouseControllerBase {
  constructor(
    protected readonly service: ProductionPlanMaterialRequestWarehouseService
  ) {
    super(service);
  }
}
