import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestOfferRewardConditionalService } from "./questOfferRewardConditional.service";
import { QuestOfferRewardConditionalControllerBase } from "./base/questOfferRewardConditional.controller.base";

@swagger.ApiTags("questOfferRewardConditionals")
@common.Controller("questOfferRewardConditionals")
export class QuestOfferRewardConditionalController extends QuestOfferRewardConditionalControllerBase {
  constructor(
    protected readonly service: QuestOfferRewardConditionalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
