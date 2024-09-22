import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SpellEffectService } from "./spellEffect.service";
import { SpellEffectGrpcControllerBase } from "./base/spellEffect.grpc.controller.base";

@swagger.ApiTags("spellEffects")
@common.Controller("spellEffects")
export class SpellEffectGrpcController extends SpellEffectGrpcControllerBase {
  constructor(protected readonly service: SpellEffectService) {
    super(service);
  }
}
