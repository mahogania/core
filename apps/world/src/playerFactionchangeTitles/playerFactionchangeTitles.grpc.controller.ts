import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlayerFactionchangeTitlesService } from "./playerFactionchangeTitles.service";
import { PlayerFactionchangeTitlesGrpcControllerBase } from "./base/playerFactionchangeTitles.grpc.controller.base";

@swagger.ApiTags("playerFactionchangeTitles")
@common.Controller("playerFactionchangeTitles")
export class PlayerFactionchangeTitlesGrpcController extends PlayerFactionchangeTitlesGrpcControllerBase {
  constructor(protected readonly service: PlayerFactionchangeTitlesService) {
    super(service);
  }
}
