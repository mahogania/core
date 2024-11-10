import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestRewardChoiceItemsService } from "./questRewardChoiceItems.service";
import { QuestRewardChoiceItemsGrpcControllerBase } from "./base/questRewardChoiceItems.grpc.controller.base";

@swagger.ApiTags("questRewardChoiceItems")
@common.Controller("questRewardChoiceItems")
export class QuestRewardChoiceItemsGrpcController extends QuestRewardChoiceItemsGrpcControllerBase {
  constructor(protected readonly service: QuestRewardChoiceItemsService) {
    super(service);
  }
}
