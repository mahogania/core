import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlayerchoiceResponseRewardItemService } from "./playerchoiceResponseRewardItem.service";
import { PlayerchoiceResponseRewardItemGrpcControllerBase } from "./base/playerchoiceResponseRewardItem.grpc.controller.base";

@swagger.ApiTags("playerchoiceResponseRewardItems")
@common.Controller("playerchoiceResponseRewardItems")
export class PlayerchoiceResponseRewardItemGrpcController extends PlayerchoiceResponseRewardItemGrpcControllerBase {
  constructor(
    protected readonly service: PlayerchoiceResponseRewardItemService
  ) {
    super(service);
  }
}
