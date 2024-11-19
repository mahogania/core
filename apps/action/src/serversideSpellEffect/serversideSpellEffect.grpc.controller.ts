import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ServersideSpellEffectService } from "./serversideSpellEffect.service";
import { ServersideSpellEffectGrpcControllerBase } from "./base/serversideSpellEffect.grpc.controller.base";

@swagger.ApiTags("serversideSpellEffects")
@common.Controller("serversideSpellEffects")
export class ServersideSpellEffectGrpcController extends ServersideSpellEffectGrpcControllerBase {
  constructor(protected readonly service: ServersideSpellEffectService) {
    super(service);
  }
}
