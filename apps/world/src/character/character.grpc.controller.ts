import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CharacterService } from "./character.service";
import { CharacterGrpcControllerBase } from "./base/character.grpc.controller.base";

@swagger.ApiTags("characters")
@common.Controller("characters")
export class CharacterGrpcController extends CharacterGrpcControllerBase {
  constructor(protected readonly service: CharacterService) {
    super(service);
  }
}
