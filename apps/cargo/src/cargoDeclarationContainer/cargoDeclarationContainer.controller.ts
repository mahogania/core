import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CargoDeclarationContainerService } from "./cargoDeclarationContainer.service";
import { CargoDeclarationContainerControllerBase } from "./base/cargoDeclarationContainer.controller.base";

@swagger.ApiTags("cargoDeclarationContainers")
@common.Controller("cargoDeclarationContainers")
export class CargoDeclarationContainerController extends CargoDeclarationContainerControllerBase {
  constructor(protected readonly service: CargoDeclarationContainerService) {
    super(service);
  }
}
