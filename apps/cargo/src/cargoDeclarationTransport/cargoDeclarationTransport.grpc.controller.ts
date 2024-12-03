import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CargoDeclarationTransportService } from "./cargoDeclarationTransport.service";
import { CargoDeclarationTransportGrpcControllerBase } from "./base/cargoDeclarationTransport.grpc.controller.base";

@swagger.ApiTags("cargoDeclarationTransports")
@common.Controller("cargoDeclarationTransports")
export class CargoDeclarationTransportGrpcController extends CargoDeclarationTransportGrpcControllerBase {
  constructor(protected readonly service: CargoDeclarationTransportService) {
    super(service);
  }
}
