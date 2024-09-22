import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AchievementScriptsService } from "./achievementScripts.service";
import { AchievementScriptsGrpcControllerBase } from "./base/achievementScripts.grpc.controller.base";

@swagger.ApiTags("achievementScripts")
@common.Controller("achievementScripts")
export class AchievementScriptsGrpcController extends AchievementScriptsGrpcControllerBase {
  constructor(protected readonly service: AchievementScriptsService) {
    super(service);
  }
}
