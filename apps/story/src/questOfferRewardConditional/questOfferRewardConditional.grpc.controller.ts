import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestOfferRewardConditionalService } from "./questOfferRewardConditional.service";
import { QuestOfferRewardConditionalGrpcControllerBase } from "./base/questOfferRewardConditional.grpc.controller.base";

@swagger.ApiTags("questOfferRewardConditionals")
@common.Controller("questOfferRewardConditionals")
export class QuestOfferRewardConditionalGrpcController extends QuestOfferRewardConditionalGrpcControllerBase {
  constructor(protected readonly service: QuestOfferRewardConditionalService) {
    super(service);
  }
}
