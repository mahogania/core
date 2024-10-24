import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WarehouseService } from "./warehouse.service";
import { WarehouseGrpcControllerBase } from "./base/warehouse.grpc.controller.base";

@swagger.ApiTags("warehouses")
@common.Controller("warehouses")
export class WarehouseGrpcController extends WarehouseGrpcControllerBase {
  constructor(protected readonly service: WarehouseService) {
    super(service);
  }
}
