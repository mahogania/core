import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CreatureTextService } from "./creatureText.service";
import { CreatureTextControllerBase } from "./base/creatureText.controller.base";

@swagger.ApiTags("creatureTexts")
@common.Controller("creatureTexts")
export class CreatureTextController extends CreatureTextControllerBase {
  constructor(
    protected readonly service: CreatureTextService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
