import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CargoDeclarationVehicleService } from "./cargoDeclarationVehicle.service";
import { CargoDeclarationVehicleControllerBase } from "./base/cargoDeclarationVehicle.controller.base";

@swagger.ApiTags("cargoDeclarationVehicles")
@common.Controller("cargoDeclarationVehicles")
export class CargoDeclarationVehicleController extends CargoDeclarationVehicleControllerBase {
  constructor(protected readonly service: CargoDeclarationVehicleService) {
    super(service);
  }
}
