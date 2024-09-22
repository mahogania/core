import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CreatureQuestEnderService } from "./creatureQuestEnder.service";
import { CreatureQuestEnderControllerBase } from "./base/creatureQuestEnder.controller.base";

@swagger.ApiTags("creatureQuestEnders")
@common.Controller("creatureQuestEnders")
export class CreatureQuestEnderController extends CreatureQuestEnderControllerBase {
  constructor(
    protected readonly service: CreatureQuestEnderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
