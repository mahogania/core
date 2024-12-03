import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CargoDeclarationContainerService } from "./cargoDeclarationContainer.service";
import { CargoDeclarationContainerGrpcControllerBase } from "./base/cargoDeclarationContainer.grpc.controller.base";

@swagger.ApiTags("cargoDeclarationContainers")
@common.Controller("cargoDeclarationContainers")
export class CargoDeclarationContainerGrpcController extends CargoDeclarationContainerGrpcControllerBase {
  constructor(protected readonly service: CargoDeclarationContainerService) {
    super(service);
  }
}
