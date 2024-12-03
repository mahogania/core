import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestRewardItemService } from "./questRewardItem.service";
import { QuestRewardItemGrpcControllerBase } from "./base/questRewardItem.grpc.controller.base";

@swagger.ApiTags("questRewardItems")
@common.Controller("questRewardItems")
export class QuestRewardItemGrpcController extends QuestRewardItemGrpcControllerBase {
  constructor(protected readonly service: QuestRewardItemService) {
    super(service);
  }
}
