import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GameEventConditionService } from "./gameEventCondition.service";
import { GameEventConditionControllerBase } from "./base/gameEventCondition.controller.base";

@swagger.ApiTags("gameEventConditions")
@common.Controller("gameEventConditions")
export class GameEventConditionController extends GameEventConditionControllerBase {
  constructor(
    protected readonly service: GameEventConditionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
