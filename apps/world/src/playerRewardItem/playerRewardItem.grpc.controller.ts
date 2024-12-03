import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlayerRewardItemService } from "./playerRewardItem.service";
import { PlayerRewardItemGrpcControllerBase } from "./base/playerRewardItem.grpc.controller.base";

@swagger.ApiTags("playerRewardItems")
@common.Controller("playerRewardItems")
export class PlayerRewardItemGrpcController extends PlayerRewardItemGrpcControllerBase {
  constructor(protected readonly service: PlayerRewardItemService) {
    super(service);
  }
}
