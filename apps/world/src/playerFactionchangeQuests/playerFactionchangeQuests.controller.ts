import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlayerFactionchangeQuestsService } from "./playerFactionchangeQuests.service";
import { PlayerFactionchangeQuestsControllerBase } from "./base/playerFactionchangeQuests.controller.base";

@swagger.ApiTags("playerFactionchangeQuests")
@common.Controller("playerFactionchangeQuests")
export class PlayerFactionchangeQuestsController extends PlayerFactionchangeQuestsControllerBase {
  constructor(
    protected readonly service: PlayerFactionchangeQuestsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
