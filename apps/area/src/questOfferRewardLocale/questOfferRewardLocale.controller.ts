import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestOfferRewardLocaleService } from "./questOfferRewardLocale.service";
import { QuestOfferRewardLocaleControllerBase } from "./base/questOfferRewardLocale.controller.base";

@swagger.ApiTags("questOfferRewardLocales")
@common.Controller("questOfferRewardLocales")
export class QuestOfferRewardLocaleController extends QuestOfferRewardLocaleControllerBase {
  constructor(
    protected readonly service: QuestOfferRewardLocaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
