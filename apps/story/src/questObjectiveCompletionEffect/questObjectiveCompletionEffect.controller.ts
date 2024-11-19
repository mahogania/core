import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestObjectiveCompletionEffectService } from "./questObjectiveCompletionEffect.service";
import { QuestObjectiveCompletionEffectControllerBase } from "./base/questObjectiveCompletionEffect.controller.base";

@swagger.ApiTags("questObjectiveCompletionEffects")
@common.Controller("questObjectiveCompletionEffects")
export class QuestObjectiveCompletionEffectController extends QuestObjectiveCompletionEffectControllerBase {
  constructor(
    protected readonly service: QuestObjectiveCompletionEffectService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
