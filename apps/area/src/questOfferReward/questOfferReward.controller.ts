import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestOfferRewardService } from "./questOfferReward.service";
import { QuestOfferRewardControllerBase } from "./base/questOfferReward.controller.base";

@swagger.ApiTags("questOfferRewards")
@common.Controller("questOfferRewards")
export class QuestOfferRewardController extends QuestOfferRewardControllerBase {
  constructor(
    protected readonly service: QuestOfferRewardService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
