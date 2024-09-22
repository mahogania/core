import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GameEventPrerequisiteService } from "./gameEventPrerequisite.service";
import { GameEventPrerequisiteGrpcControllerBase } from "./base/gameEventPrerequisite.grpc.controller.base";

@swagger.ApiTags("gameEventPrerequisites")
@common.Controller("gameEventPrerequisites")
export class GameEventPrerequisiteGrpcController extends GameEventPrerequisiteGrpcControllerBase {
  constructor(protected readonly service: GameEventPrerequisiteService) {
    super(service);
  }
}
