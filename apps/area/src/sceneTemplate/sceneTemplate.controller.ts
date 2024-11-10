import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SceneTemplateService } from "./sceneTemplate.service";
import { SceneTemplateControllerBase } from "./base/sceneTemplate.controller.base";

@swagger.ApiTags("sceneTemplates")
@common.Controller("sceneTemplates")
export class SceneTemplateController extends SceneTemplateControllerBase {
  constructor(
    protected readonly service: SceneTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
