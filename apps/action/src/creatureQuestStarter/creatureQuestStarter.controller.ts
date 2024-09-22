import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CreatureQuestStarterService } from "./creatureQuestStarter.service";
import { CreatureQuestStarterControllerBase } from "./base/creatureQuestStarter.controller.base";

@swagger.ApiTags("creatureQuestStarters")
@common.Controller("creatureQuestStarters")
export class CreatureQuestStarterController extends CreatureQuestStarterControllerBase {
  constructor(
    protected readonly service: CreatureQuestStarterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
