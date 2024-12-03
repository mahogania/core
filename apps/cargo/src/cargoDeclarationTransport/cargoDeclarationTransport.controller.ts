import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CargoDeclarationTransportService } from "./cargoDeclarationTransport.service";
import { CargoDeclarationTransportControllerBase } from "./base/cargoDeclarationTransport.controller.base";

@swagger.ApiTags("cargoDeclarationTransports")
@common.Controller("cargoDeclarationTransports")
export class CargoDeclarationTransportController extends CargoDeclarationTransportControllerBase {
  constructor(protected readonly service: CargoDeclarationTransportService) {
    super(service);
  }
}
