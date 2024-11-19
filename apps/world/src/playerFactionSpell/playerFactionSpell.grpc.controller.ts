import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlayerFactionSpellService } from "./playerFactionSpell.service";
import { PlayerFactionSpellGrpcControllerBase } from "./base/playerFactionSpell.grpc.controller.base";

@swagger.ApiTags("playerFactionSpells")
@common.Controller("playerFactionSpells")
export class PlayerFactionSpellGrpcController extends PlayerFactionSpellGrpcControllerBase {
  constructor(protected readonly service: PlayerFactionSpellService) {
    super(service);
  }
}
