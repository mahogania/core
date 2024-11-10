import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SkillFishingBaseLevelService } from "./skillFishingBaseLevel.service";
import { SkillFishingBaseLevelGrpcControllerBase } from "./base/skillFishingBaseLevel.grpc.controller.base";

@swagger.ApiTags("skillFishingBaseLevels")
@common.Controller("skillFishingBaseLevels")
export class SkillFishingBaseLevelGrpcController extends SkillFishingBaseLevelGrpcControllerBase {
  constructor(protected readonly service: SkillFishingBaseLevelService) {
    super(service);
  }
}
