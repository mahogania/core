import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LfgDungeonTemplateService } from "./lfgDungeonTemplate.service";
import { LfgDungeonTemplateControllerBase } from "./base/lfgDungeonTemplate.controller.base";

@swagger.ApiTags("lfgDungeonTemplates")
@common.Controller("lfgDungeonTemplates")
export class LfgDungeonTemplateController extends LfgDungeonTemplateControllerBase {
  constructor(
    protected readonly service: LfgDungeonTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
