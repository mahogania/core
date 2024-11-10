import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlayerFactionTitleService } from "./playerFactionTitle.service";
import { PlayerFactionTitleGrpcControllerBase } from "./base/playerFactionTitle.grpc.controller.base";

@swagger.ApiTags("playerFactionTitles")
@common.Controller("playerFactionTitles")
export class PlayerFactionTitleGrpcController extends PlayerFactionTitleGrpcControllerBase {
  constructor(protected readonly service: PlayerFactionTitleService) {
    super(service);
  }
}
