import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GameObjectTemplateService } from "./gameObjectTemplate.service";
import { GameObjectTemplateControllerBase } from "./base/gameObjectTemplate.controller.base";

@swagger.ApiTags("gameObjectTemplates")
@common.Controller("gameObjectTemplates")
export class GameObjectTemplateController extends GameObjectTemplateControllerBase {
  constructor(
    protected readonly service: GameObjectTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
