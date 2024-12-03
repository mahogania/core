import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CargoDeclarationService } from "./cargoDeclaration.service";
import { CargoDeclarationControllerBase } from "./base/cargoDeclaration.controller.base";

@swagger.ApiTags("cargoDeclarations")
@common.Controller("cargoDeclarations")
export class CargoDeclarationController extends CargoDeclarationControllerBase {
  constructor(protected readonly service: CargoDeclarationService) {
    super(service);
  }
}
