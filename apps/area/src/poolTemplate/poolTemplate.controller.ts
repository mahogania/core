import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PoolTemplateService } from "./poolTemplate.service";
import { PoolTemplateControllerBase } from "./base/poolTemplate.controller.base";

@swagger.ApiTags("poolTemplates")
@common.Controller("poolTemplates")
export class PoolTemplateController extends PoolTemplateControllerBase {
  constructor(
    protected readonly service: PoolTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
