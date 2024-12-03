import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BattlePetBreedsService } from "./battlePetBreeds.service";
import { BattlePetBreedsGrpcControllerBase } from "./base/battlePetBreeds.grpc.controller.base";

@swagger.ApiTags("battlePetBreeds")
@common.Controller("battlePetBreeds")
export class BattlePetBreedsGrpcController extends BattlePetBreedsGrpcControllerBase {
  constructor(protected readonly service: BattlePetBreedsService) {
    super(service);
  }
}
