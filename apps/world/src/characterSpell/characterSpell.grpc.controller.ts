import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CharacterSpellService } from "./characterSpell.service";
import { CharacterSpellGrpcControllerBase } from "./base/characterSpell.grpc.controller.base";

@swagger.ApiTags("characterSpells")
@common.Controller("characterSpells")
export class CharacterSpellGrpcController extends CharacterSpellGrpcControllerBase {
  constructor(protected readonly service: CharacterSpellService) {
    super(service);
  }
}
