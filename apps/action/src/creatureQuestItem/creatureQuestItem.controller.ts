import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CreatureQuestItemService } from "./creatureQuestItem.service";
import { CreatureQuestItemControllerBase } from "./base/creatureQuestItem.controller.base";

@swagger.ApiTags("creatureQuestItems")
@common.Controller("creatureQuestItems")
export class CreatureQuestItemController extends CreatureQuestItemControllerBase {
  constructor(
    protected readonly service: CreatureQuestItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
