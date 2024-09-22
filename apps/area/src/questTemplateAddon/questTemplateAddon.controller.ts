import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestTemplateAddonService } from "./questTemplateAddon.service";
import { QuestTemplateAddonControllerBase } from "./base/questTemplateAddon.controller.base";

@swagger.ApiTags("questTemplateAddons")
@common.Controller("questTemplateAddons")
export class QuestTemplateAddonController extends QuestTemplateAddonControllerBase {
  constructor(
    protected readonly service: QuestTemplateAddonService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
