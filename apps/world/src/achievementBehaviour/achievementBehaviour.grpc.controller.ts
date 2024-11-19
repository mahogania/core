import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AchievementBehaviourService } from "./achievementBehaviour.service";
import { AchievementBehaviourGrpcControllerBase } from "./base/achievementBehaviour.grpc.controller.base";

@swagger.ApiTags("achievementBehaviours")
@common.Controller("achievementBehaviours")
export class AchievementBehaviourGrpcController extends AchievementBehaviourGrpcControllerBase {
  constructor(protected readonly service: AchievementBehaviourService) {
    super(service);
  }
}
