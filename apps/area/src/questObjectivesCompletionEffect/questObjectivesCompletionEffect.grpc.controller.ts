import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestObjectivesCompletionEffectService } from "./questObjectivesCompletionEffect.service";
import { QuestObjectivesCompletionEffectGrpcControllerBase } from "./base/questObjectivesCompletionEffect.grpc.controller.base";

@swagger.ApiTags("questObjectivesCompletionEffects")
@common.Controller("questObjectivesCompletionEffects")
export class QuestObjectivesCompletionEffectGrpcController extends QuestObjectivesCompletionEffectGrpcControllerBase {
  constructor(
    protected readonly service: QuestObjectivesCompletionEffectService
  ) {
    super(service);
  }
}
