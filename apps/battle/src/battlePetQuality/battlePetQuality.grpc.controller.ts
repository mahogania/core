import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BattlePetQualityService } from "./battlePetQuality.service";
import { BattlePetQualityGrpcControllerBase } from "./base/battlePetQuality.grpc.controller.base";

@swagger.ApiTags("battlePetQualities")
@common.Controller("battlePetQualities")
export class BattlePetQualityGrpcController extends BattlePetQualityGrpcControllerBase {
  constructor(protected readonly service: BattlePetQualityService) {
    super(service);
  }
}
