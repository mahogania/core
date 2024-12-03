import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CargoDeclarationService } from "./cargoDeclaration.service";
import { CargoDeclarationGrpcControllerBase } from "./base/cargoDeclaration.grpc.controller.base";

@swagger.ApiTags("cargoDeclarations")
@common.Controller("cargoDeclarations")
export class CargoDeclarationGrpcController extends CargoDeclarationGrpcControllerBase {
  constructor(protected readonly service: CargoDeclarationService) {
    super(service);
  }
}
