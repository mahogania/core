import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GameEventPrerequisiteService } from "./gameEventPrerequisite.service";
import { GameEventPrerequisiteControllerBase } from "./base/gameEventPrerequisite.controller.base";

@swagger.ApiTags("gameEventPrerequisites")
@common.Controller("gameEventPrerequisites")
export class GameEventPrerequisiteController extends GameEventPrerequisiteControllerBase {
  constructor(
    protected readonly service: GameEventPrerequisiteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
