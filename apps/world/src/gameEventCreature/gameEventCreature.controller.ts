import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GameEventCreatureService } from "./gameEventCreature.service";
import { GameEventCreatureControllerBase } from "./base/gameEventCreature.controller.base";

@swagger.ApiTags("gameEventCreatures")
@common.Controller("gameEventCreatures")
export class GameEventCreatureController extends GameEventCreatureControllerBase {
  constructor(
    protected readonly service: GameEventCreatureService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
