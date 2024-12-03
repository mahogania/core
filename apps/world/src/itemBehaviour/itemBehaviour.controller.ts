import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ItemBehaviourService } from "./itemBehaviour.service";
import { ItemBehaviourControllerBase } from "./base/itemBehaviour.controller.base";

@swagger.ApiTags("itemBehaviours")
@common.Controller("itemBehaviours")
export class ItemBehaviourController extends ItemBehaviourControllerBase {
  constructor(
    protected readonly service: ItemBehaviourService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
