import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestCueEffectService } from "./questCueEffect.service";
import { QuestCueEffectGrpcControllerBase } from "./base/questCueEffect.grpc.controller.base";

@swagger.ApiTags("questCueEffects")
@common.Controller("questCueEffects")
export class QuestCueEffectGrpcController extends QuestCueEffectGrpcControllerBase {
  constructor(protected readonly service: QuestCueEffectService) {
    super(service);
  }
}
