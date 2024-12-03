import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestTemplateLocaleService } from "./questTemplateLocale.service";
import { QuestTemplateLocaleControllerBase } from "./base/questTemplateLocale.controller.base";

@swagger.ApiTags("questTemplateLocales")
@common.Controller("questTemplateLocales")
export class QuestTemplateLocaleController extends QuestTemplateLocaleControllerBase {
  constructor(
    protected readonly service: QuestTemplateLocaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
