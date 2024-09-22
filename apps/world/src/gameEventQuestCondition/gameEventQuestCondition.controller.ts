import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GameEventQuestConditionService } from "./gameEventQuestCondition.service";
import { GameEventQuestConditionControllerBase } from "./base/gameEventQuestCondition.controller.base";

@swagger.ApiTags("gameEventQuestConditions")
@common.Controller("gameEventQuestConditions")
export class GameEventQuestConditionController extends GameEventQuestConditionControllerBase {
  constructor(
    protected readonly service: GameEventQuestConditionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
