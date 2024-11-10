import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ItemTemplateAddonService } from "./itemTemplateAddon.service";
import { ItemTemplateAddonControllerBase } from "./base/itemTemplateAddon.controller.base";

@swagger.ApiTags("itemTemplateAddons")
@common.Controller("itemTemplateAddons")
export class ItemTemplateAddonController extends ItemTemplateAddonControllerBase {
  constructor(
    protected readonly service: ItemTemplateAddonService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
