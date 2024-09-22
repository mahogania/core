import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ItemScriptNamesService } from "./itemScriptNames.service";
import { ItemScriptNamesControllerBase } from "./base/itemScriptNames.controller.base";

@swagger.ApiTags("itemScriptNames")
@common.Controller("itemScriptNames")
export class ItemScriptNamesController extends ItemScriptNamesControllerBase {
  constructor(
    protected readonly service: ItemScriptNamesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
