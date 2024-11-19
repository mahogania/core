import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestObjectivesCompletionEffectService } from "./questObjectivesCompletionEffect.service";
import { QuestObjectivesCompletionEffectControllerBase } from "./base/questObjectivesCompletionEffect.controller.base";

@swagger.ApiTags("questObjectivesCompletionEffects")
@common.Controller("questObjectivesCompletionEffects")
export class QuestObjectivesCompletionEffectController extends QuestObjectivesCompletionEffectControllerBase {
  constructor(
    protected readonly service: QuestObjectivesCompletionEffectService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
