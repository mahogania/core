import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AchievementRewardLocaleService } from "./achievementRewardLocale.service";
import { AchievementRewardLocaleGrpcControllerBase } from "./base/achievementRewardLocale.grpc.controller.base";

@swagger.ApiTags("achievementRewardLocales")
@common.Controller("achievementRewardLocales")
export class AchievementRewardLocaleGrpcController extends AchievementRewardLocaleGrpcControllerBase {
  constructor(protected readonly service: AchievementRewardLocaleService) {
    super(service);
  }
}
