import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CreatureSummonGroupsService } from "./creatureSummonGroups.service";
import { CreatureSummonGroupsControllerBase } from "./base/creatureSummonGroups.controller.base";

@swagger.ApiTags("creatureSummonGroups")
@common.Controller("creatureSummonGroups")
export class CreatureSummonGroupsController extends CreatureSummonGroupsControllerBase {
  constructor(
    protected readonly service: CreatureSummonGroupsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
