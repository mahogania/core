import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CreatureTemplateGossipService } from "./creatureTemplateGossip.service";
import { CreatureTemplateGossipControllerBase } from "./base/creatureTemplateGossip.controller.base";

@swagger.ApiTags("creatureTemplateGossips")
@common.Controller("creatureTemplateGossips")
export class CreatureTemplateGossipController extends CreatureTemplateGossipControllerBase {
  constructor(
    protected readonly service: CreatureTemplateGossipService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
