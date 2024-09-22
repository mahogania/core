import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CreatureClassLevelStatsService } from "./creatureClassLevelStats.service";
import { CreatureClassLevelStatsControllerBase } from "./base/creatureClassLevelStats.controller.base";

@swagger.ApiTags("creatureClassLevelStats")
@common.Controller("creatureClassLevelStats")
export class CreatureClassLevelStatsController extends CreatureClassLevelStatsControllerBase {
  constructor(
    protected readonly service: CreatureClassLevelStatsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
