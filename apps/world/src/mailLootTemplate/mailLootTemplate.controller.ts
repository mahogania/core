import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MailLootTemplateService } from "./mailLootTemplate.service";
import { MailLootTemplateControllerBase } from "./base/mailLootTemplate.controller.base";

@swagger.ApiTags("mailLootTemplates")
@common.Controller("mailLootTemplates")
export class MailLootTemplateController extends MailLootTemplateControllerBase {
  constructor(
    protected readonly service: MailLootTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
