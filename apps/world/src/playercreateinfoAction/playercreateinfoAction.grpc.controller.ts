import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlayercreateinfoActionService } from "./playercreateinfoAction.service";
import { PlayercreateinfoActionGrpcControllerBase } from "./base/playercreateinfoAction.grpc.controller.base";

@swagger.ApiTags("playercreateinfoActions")
@common.Controller("playercreateinfoActions")
export class PlayercreateinfoActionGrpcController extends PlayercreateinfoActionGrpcControllerBase {
  constructor(protected readonly service: PlayercreateinfoActionService) {
    super(service);
  }
}
