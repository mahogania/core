import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ItemLootTemplateService } from "./itemLootTemplate.service";
import { ItemLootTemplateControllerBase } from "./base/itemLootTemplate.controller.base";

@swagger.ApiTags("itemLootTemplates")
@common.Controller("itemLootTemplates")
export class ItemLootTemplateController extends ItemLootTemplateControllerBase {
  constructor(
    protected readonly service: ItemLootTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
