import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PetNameGenerationService } from "./petNameGeneration.service";
import { PetNameGenerationGrpcControllerBase } from "./base/petNameGeneration.grpc.controller.base";

@swagger.ApiTags("petNameGenerations")
@common.Controller("petNameGenerations")
export class PetNameGenerationGrpcController extends PetNameGenerationGrpcControllerBase {
  constructor(protected readonly service: PetNameGenerationService) {
    super(service);
  }
}
