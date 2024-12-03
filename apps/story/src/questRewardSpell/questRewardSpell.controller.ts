import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestRewardSpellService } from "./questRewardSpell.service";
import { QuestRewardSpellControllerBase } from "./base/questRewardSpell.controller.base";

@swagger.ApiTags("questRewardSpells")
@common.Controller("questRewardSpells")
export class QuestRewardSpellController extends QuestRewardSpellControllerBase {
  constructor(
    protected readonly service: QuestRewardSpellService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
