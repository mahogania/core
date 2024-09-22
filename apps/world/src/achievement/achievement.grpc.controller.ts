import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AchievementService } from "./achievement.service";
import { AchievementGrpcControllerBase } from "./base/achievement.grpc.controller.base";

@swagger.ApiTags("achievements")
@common.Controller("achievements")
export class AchievementGrpcController extends AchievementGrpcControllerBase {
  constructor(protected readonly service: AchievementService) {
    super(service);
  }
}
