import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GameObjectTemplateLocaleService } from "./gameObjectTemplateLocale.service";
import { GameObjectTemplateLocaleControllerBase } from "./base/gameObjectTemplateLocale.controller.base";

@swagger.ApiTags("gameObjectTemplateLocales")
@common.Controller("gameObjectTemplateLocales")
export class GameObjectTemplateLocaleController extends GameObjectTemplateLocaleControllerBase {
  constructor(
    protected readonly service: GameObjectTemplateLocaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
