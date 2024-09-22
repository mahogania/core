import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlayercreateinfoCastSpellService } from "./playercreateinfoCastSpell.service";
import { PlayercreateinfoCastSpellGrpcControllerBase } from "./base/playercreateinfoCastSpell.grpc.controller.base";

@swagger.ApiTags("playercreateinfoCastSpells")
@common.Controller("playercreateinfoCastSpells")
export class PlayercreateinfoCastSpellGrpcController extends PlayercreateinfoCastSpellGrpcControllerBase {
  constructor(protected readonly service: PlayercreateinfoCastSpellService) {
    super(service);
  }
}
