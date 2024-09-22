import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SpawnGroupTemplateService } from "./spawnGroupTemplate.service";
import { SpawnGroupTemplateControllerBase } from "./base/spawnGroupTemplate.controller.base";

@swagger.ApiTags("spawnGroupTemplates")
@common.Controller("spawnGroupTemplates")
export class SpawnGroupTemplateController extends SpawnGroupTemplateControllerBase {
  constructor(
    protected readonly service: SpawnGroupTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
