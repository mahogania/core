import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GameEventCharacterService } from "./gameEventCharacter.service";
import { GameEventCharacterControllerBase } from "./base/gameEventCharacter.controller.base";

@swagger.ApiTags("gameEventCharacters")
@common.Controller("gameEventCharacters")
export class GameEventCharacterController extends GameEventCharacterControllerBase {
  constructor(
    protected readonly service: GameEventCharacterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
