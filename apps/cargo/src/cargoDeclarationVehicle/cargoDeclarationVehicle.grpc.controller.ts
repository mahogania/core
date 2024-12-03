import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CargoDeclarationVehicleService } from "./cargoDeclarationVehicle.service";
import { CargoDeclarationVehicleGrpcControllerBase } from "./base/cargoDeclarationVehicle.grpc.controller.base";

@swagger.ApiTags("cargoDeclarationVehicles")
@common.Controller("cargoDeclarationVehicles")
export class CargoDeclarationVehicleGrpcController extends CargoDeclarationVehicleGrpcControllerBase {
  constructor(protected readonly service: CargoDeclarationVehicleService) {
    super(service);
  }
}
