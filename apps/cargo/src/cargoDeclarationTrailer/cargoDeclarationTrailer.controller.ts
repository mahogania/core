import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CargoDeclarationTrailerService } from "./cargoDeclarationTrailer.service";
import { CargoDeclarationTrailerControllerBase } from "./base/cargoDeclarationTrailer.controller.base";

@swagger.ApiTags("cargoDeclarationTrailers")
@common.Controller("cargoDeclarationTrailers")
export class CargoDeclarationTrailerController extends CargoDeclarationTrailerControllerBase {
  constructor(protected readonly service: CargoDeclarationTrailerService) {
    super(service);
  }
}
