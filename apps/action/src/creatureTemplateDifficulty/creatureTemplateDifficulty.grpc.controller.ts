import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreatureTemplateDifficultyService } from "./creatureTemplateDifficulty.service";
import { CreatureTemplateDifficultyGrpcControllerBase } from "./base/creatureTemplateDifficulty.grpc.controller.base";

@swagger.ApiTags("creatureTemplateDifficulties")
@common.Controller("creatureTemplateDifficulties")
export class CreatureTemplateDifficultyGrpcController extends CreatureTemplateDifficultyGrpcControllerBase {
  constructor(protected readonly service: CreatureTemplateDifficultyService) {
    super(service);
  }
}
