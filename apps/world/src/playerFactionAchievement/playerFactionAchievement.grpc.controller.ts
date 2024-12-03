import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlayerFactionAchievementService } from "./playerFactionAchievement.service";
import { PlayerFactionAchievementGrpcControllerBase } from "./base/playerFactionAchievement.grpc.controller.base";

@swagger.ApiTags("playerFactionAchievements")
@common.Controller("playerFactionAchievements")
export class PlayerFactionAchievementGrpcController extends PlayerFactionAchievementGrpcControllerBase {
  constructor(protected readonly service: PlayerFactionAchievementService) {
    super(service);
  }
}
