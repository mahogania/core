import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlayerFactionchangeSpellsService } from "./playerFactionchangeSpells.service";
import { PlayerFactionchangeSpellsGrpcControllerBase } from "./base/playerFactionchangeSpells.grpc.controller.base";

@swagger.ApiTags("playerFactionchangeSpells")
@common.Controller("playerFactionchangeSpells")
export class PlayerFactionchangeSpellsGrpcController extends PlayerFactionchangeSpellsGrpcControllerBase {
  constructor(protected readonly service: PlayerFactionchangeSpellsService) {
    super(service);
  }
}
