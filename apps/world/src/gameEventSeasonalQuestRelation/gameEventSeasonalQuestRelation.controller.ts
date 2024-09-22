import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GameEventSeasonalQuestRelationService } from "./gameEventSeasonalQuestRelation.service";
import { GameEventSeasonalQuestRelationControllerBase } from "./base/gameEventSeasonalQuestRelation.controller.base";

@swagger.ApiTags("gameEventSeasonalQuestRelations")
@common.Controller("gameEventSeasonalQuestRelations")
export class GameEventSeasonalQuestRelationController extends GameEventSeasonalQuestRelationControllerBase {
  constructor(
    protected readonly service: GameEventSeasonalQuestRelationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
