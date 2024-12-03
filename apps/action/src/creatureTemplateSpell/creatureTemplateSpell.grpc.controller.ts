import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreatureTemplateSpellService } from "./creatureTemplateSpell.service";
import { CreatureTemplateSpellGrpcControllerBase } from "./base/creatureTemplateSpell.grpc.controller.base";

@swagger.ApiTags("creatureTemplateSpells")
@common.Controller("creatureTemplateSpells")
export class CreatureTemplateSpellGrpcController extends CreatureTemplateSpellGrpcControllerBase {
  constructor(protected readonly service: CreatureTemplateSpellService) {
    super(service);
  }
}
