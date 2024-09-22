import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlayerchoiceResponseRewardItemChoiceService } from "./playerchoiceResponseRewardItemChoice.service";
import { PlayerchoiceResponseRewardItemChoiceGrpcControllerBase } from "./base/playerchoiceResponseRewardItemChoice.grpc.controller.base";

@swagger.ApiTags("playerchoiceResponseRewardItemChoices")
@common.Controller("playerchoiceResponseRewardItemChoices")
export class PlayerchoiceResponseRewardItemChoiceGrpcController extends PlayerchoiceResponseRewardItemChoiceGrpcControllerBase {
  constructor(
    protected readonly service: PlayerchoiceResponseRewardItemChoiceService
  ) {
    super(service);
  }
}
