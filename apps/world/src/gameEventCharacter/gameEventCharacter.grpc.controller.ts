import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GameEventCharacterService } from "./gameEventCharacter.service";
import { GameEventCharacterGrpcControllerBase } from "./base/gameEventCharacter.grpc.controller.base";

@swagger.ApiTags("gameEventCharacters")
@common.Controller("gameEventCharacters")
export class GameEventCharacterGrpcController extends GameEventCharacterGrpcControllerBase {
  constructor(protected readonly service: GameEventCharacterService) {
    super(service);
  }
}
