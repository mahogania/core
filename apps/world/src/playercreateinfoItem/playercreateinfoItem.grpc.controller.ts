import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlayercreateinfoItemService } from "./playercreateinfoItem.service";
import { PlayercreateinfoItemGrpcControllerBase } from "./base/playercreateinfoItem.grpc.controller.base";

@swagger.ApiTags("playercreateinfoItems")
@common.Controller("playercreateinfoItems")
export class PlayercreateinfoItemGrpcController extends PlayercreateinfoItemGrpcControllerBase {
  constructor(protected readonly service: PlayercreateinfoItemService) {
    super(service);
  }
}
