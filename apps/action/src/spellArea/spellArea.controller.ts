import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SpellAreaService } from "./spellArea.service";
import { SpellAreaControllerBase } from "./base/spellArea.controller.base";

@swagger.ApiTags("spellAreas")
@common.Controller("spellAreas")
export class SpellAreaController extends SpellAreaControllerBase {
  constructor(
    protected readonly service: SpellAreaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
