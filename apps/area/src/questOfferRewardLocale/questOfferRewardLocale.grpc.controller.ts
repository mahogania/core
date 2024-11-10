import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestOfferRewardLocaleService } from "./questOfferRewardLocale.service";
import { QuestOfferRewardLocaleGrpcControllerBase } from "./base/questOfferRewardLocale.grpc.controller.base";

@swagger.ApiTags("questOfferRewardLocales")
@common.Controller("questOfferRewardLocales")
export class QuestOfferRewardLocaleGrpcController extends QuestOfferRewardLocaleGrpcControllerBase {
  constructor(protected readonly service: QuestOfferRewardLocaleService) {
    super(service);
  }
}
