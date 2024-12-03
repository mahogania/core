import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GameObjectLootTemplateService } from "./gameObjectLootTemplate.service";
import { GameObjectLootTemplateControllerBase } from "./base/gameObjectLootTemplate.controller.base";

@swagger.ApiTags("gameObjectLootTemplates")
@common.Controller("gameObjectLootTemplates")
export class GameObjectLootTemplateController extends GameObjectLootTemplateControllerBase {
  constructor(
    protected readonly service: GameObjectLootTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
