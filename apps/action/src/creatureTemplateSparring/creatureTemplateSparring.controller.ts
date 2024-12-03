import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CreatureTemplateSparringService } from "./creatureTemplateSparring.service";
import { CreatureTemplateSparringControllerBase } from "./base/creatureTemplateSparring.controller.base";

@swagger.ApiTags("creatureTemplateSparrings")
@common.Controller("creatureTemplateSparrings")
export class CreatureTemplateSparringController extends CreatureTemplateSparringControllerBase {
  constructor(
    protected readonly service: CreatureTemplateSparringService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
