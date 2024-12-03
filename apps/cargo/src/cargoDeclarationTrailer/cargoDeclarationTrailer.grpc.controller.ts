import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CargoDeclarationTrailerService } from "./cargoDeclarationTrailer.service";
import { CargoDeclarationTrailerGrpcControllerBase } from "./base/cargoDeclarationTrailer.grpc.controller.base";

@swagger.ApiTags("cargoDeclarationTrailers")
@common.Controller("cargoDeclarationTrailers")
export class CargoDeclarationTrailerGrpcController extends CargoDeclarationTrailerGrpcControllerBase {
  constructor(protected readonly service: CargoDeclarationTrailerService) {
    super(service);
  }
}
