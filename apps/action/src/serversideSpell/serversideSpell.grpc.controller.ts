import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ServersideSpellService } from "./serversideSpell.service";
import { ServersideSpellGrpcControllerBase } from "./base/serversideSpell.grpc.controller.base";

@swagger.ApiTags("serversideSpells")
@common.Controller("serversideSpells")
export class ServersideSpellGrpcController extends ServersideSpellGrpcControllerBase {
  constructor(protected readonly service: ServersideSpellService) {
    super(service);
  }
}
