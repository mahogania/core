import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestVisualEffectService } from "./questVisualEffect.service";
import { QuestVisualEffectGrpcControllerBase } from "./base/questVisualEffect.grpc.controller.base";

@swagger.ApiTags("questVisualEffects")
@common.Controller("questVisualEffects")
export class QuestVisualEffectGrpcController extends QuestVisualEffectGrpcControllerBase {
  constructor(protected readonly service: QuestVisualEffectService) {
    super(service);
  }
}
