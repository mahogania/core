import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ItemRandomBonusListTemplateService } from "./itemRandomBonusListTemplate.service";
import { ItemRandomBonusListTemplateControllerBase } from "./base/itemRandomBonusListTemplate.controller.base";

@swagger.ApiTags("itemRandomBonusListTemplates")
@common.Controller("itemRandomBonusListTemplates")
export class ItemRandomBonusListTemplateController extends ItemRandomBonusListTemplateControllerBase {
  constructor(
    protected readonly service: ItemRandomBonusListTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
