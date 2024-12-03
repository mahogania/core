import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlayerCraftService } from "./playerCraft.service";
import { PlayerCraftControllerBase } from "./base/playerCraft.controller.base";

@swagger.ApiTags("playerCrafts")
@common.Controller("playerCrafts")
export class PlayerCraftController extends PlayerCraftControllerBase {
  constructor(
    protected readonly service: PlayerCraftService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
