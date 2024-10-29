import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ItemTemplateService } from "./itemTemplate.service";
import { ItemTemplateControllerBase } from "./base/itemTemplate.controller.base";

@swagger.ApiTags("itemTemplates")
@common.Controller("itemTemplates")
export class ItemTemplateController extends ItemTemplateControllerBase {
  constructor(
    protected readonly service: ItemTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
