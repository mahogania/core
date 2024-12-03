import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CreatureLootService } from "./creatureLoot.service";
import { CreatureLootControllerBase } from "./base/creatureLoot.controller.base";

@swagger.ApiTags("creatureLoots")
@common.Controller("creatureLoots")
export class CreatureLootController extends CreatureLootControllerBase {
  constructor(
    protected readonly service: CreatureLootService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
