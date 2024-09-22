import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CreatureService } from "./creature.service";
import { CreatureControllerBase } from "./base/creature.controller.base";

@swagger.ApiTags("creatures")
@common.Controller("creatures")
export class CreatureController extends CreatureControllerBase {
  constructor(
    protected readonly service: CreatureService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
