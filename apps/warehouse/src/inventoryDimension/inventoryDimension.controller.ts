import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InventoryDimensionService } from "./inventoryDimension.service";
import { InventoryDimensionControllerBase } from "./base/inventoryDimension.controller.base";

@swagger.ApiTags("inventoryDimensions")
@common.Controller("inventoryDimensions")
export class InventoryDimensionController extends InventoryDimensionControllerBase {
  constructor(protected readonly service: InventoryDimensionService) {
    super(service);
  }
}
