import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestOfferRewardService } from "./questOfferReward.service";
import { QuestOfferRewardGrpcControllerBase } from "./base/questOfferReward.grpc.controller.base";

@swagger.ApiTags("questOfferRewards")
@common.Controller("questOfferRewards")
export class QuestOfferRewardGrpcController extends QuestOfferRewardGrpcControllerBase {
  constructor(protected readonly service: QuestOfferRewardService) {
    super(service);
  }
}
