import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OutdoorpvpTemplateService } from "./outdoorpvpTemplate.service";
import { OutdoorpvpTemplateControllerBase } from "./base/outdoorpvpTemplate.controller.base";

@swagger.ApiTags("outdoorpvpTemplates")
@common.Controller("outdoorpvpTemplates")
export class OutdoorpvpTemplateController extends OutdoorpvpTemplateControllerBase {
  constructor(
    protected readonly service: OutdoorpvpTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
