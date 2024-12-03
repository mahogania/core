import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { InstanceTemplateService } from "./instanceTemplate.service";
import { InstanceTemplateControllerBase } from "./base/instanceTemplate.controller.base";

@swagger.ApiTags("instanceTemplates")
@common.Controller("instanceTemplates")
export class InstanceTemplateController extends InstanceTemplateControllerBase {
  constructor(
    protected readonly service: InstanceTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
