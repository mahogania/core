import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NpcSpellclickSpellsService } from "./npcSpellclickSpells.service";
import { NpcSpellclickSpellsGrpcControllerBase } from "./base/npcSpellclickSpells.grpc.controller.base";

@swagger.ApiTags("npcSpellclickSpells")
@common.Controller("npcSpellclickSpells")
export class NpcSpellclickSpellsGrpcController extends NpcSpellclickSpellsGrpcControllerBase {
  constructor(protected readonly service: NpcSpellclickSpellsService) {
    super(service);
  }
}
