import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestObjectiveCompletionEffectService } from "./questObjectiveCompletionEffect.service";
import { QuestObjectiveCompletionEffectGrpcControllerBase } from "./base/questObjectiveCompletionEffect.grpc.controller.base";

@swagger.ApiTags("questObjectiveCompletionEffects")
@common.Controller("questObjectiveCompletionEffects")
export class QuestObjectiveCompletionEffectGrpcController extends QuestObjectiveCompletionEffectGrpcControllerBase {
  constructor(
    protected readonly service: QuestObjectiveCompletionEffectService
  ) {
    super(service);
  }
}
