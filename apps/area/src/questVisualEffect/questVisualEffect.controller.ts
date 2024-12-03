import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestVisualEffectService } from "./questVisualEffect.service";
import { QuestVisualEffectControllerBase } from "./base/questVisualEffect.controller.base";

@swagger.ApiTags("questVisualEffects")
@common.Controller("questVisualEffects")
export class QuestVisualEffectController extends QuestVisualEffectControllerBase {
  constructor(
    protected readonly service: QuestVisualEffectService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
