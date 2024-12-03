import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestRequestItemService } from "./questRequestItem.service";
import { QuestRequestItemGrpcControllerBase } from "./base/questRequestItem.grpc.controller.base";

@swagger.ApiTags("questRequestItems")
@common.Controller("questRequestItems")
export class QuestRequestItemGrpcController extends QuestRequestItemGrpcControllerBase {
  constructor(protected readonly service: QuestRequestItemService) {
    super(service);
  }
}
