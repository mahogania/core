import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlayerFactionchangeAchievementService } from "./playerFactionchangeAchievement.service";
import { PlayerFactionchangeAchievementGrpcControllerBase } from "./base/playerFactionchangeAchievement.grpc.controller.base";

@swagger.ApiTags("playerFactionchangeAchievements")
@common.Controller("playerFactionchangeAchievements")
export class PlayerFactionchangeAchievementGrpcController extends PlayerFactionchangeAchievementGrpcControllerBase {
  constructor(
    protected readonly service: PlayerFactionchangeAchievementService
  ) {
    super(service);
  }
}
