import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WarehouseTypeService } from "./warehouseType.service";
import { WarehouseTypeControllerBase } from "./base/warehouseType.controller.base";

@swagger.ApiTags("warehouseTypes")
@common.Controller("warehouseTypes")
export class WarehouseTypeController extends WarehouseTypeControllerBase {
  constructor(protected readonly service: WarehouseTypeService) {
    super(service);
  }
}
