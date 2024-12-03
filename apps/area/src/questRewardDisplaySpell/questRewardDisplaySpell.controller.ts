import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestRewardDisplaySpellService } from "./questRewardDisplaySpell.service";
import { QuestRewardDisplaySpellControllerBase } from "./base/questRewardDisplaySpell.controller.base";

@swagger.ApiTags("questRewardDisplaySpells")
@common.Controller("questRewardDisplaySpells")
export class QuestRewardDisplaySpellController extends QuestRewardDisplaySpellControllerBase {
  constructor(
    protected readonly service: QuestRewardDisplaySpellService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
