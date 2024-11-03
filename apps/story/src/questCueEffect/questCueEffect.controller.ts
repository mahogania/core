import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestCueEffectService } from "./questCueEffect.service";
import { QuestCueEffectControllerBase } from "./base/questCueEffect.controller.base";

@swagger.ApiTags("questCueEffects")
@common.Controller("questCueEffects")
export class QuestCueEffectController extends QuestCueEffectControllerBase {
  constructor(
    protected readonly service: QuestCueEffectService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
