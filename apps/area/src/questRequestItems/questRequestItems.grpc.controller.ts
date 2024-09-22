import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestRequestItemsService } from "./questRequestItems.service";
import { QuestRequestItemsGrpcControllerBase } from "./base/questRequestItems.grpc.controller.base";

@swagger.ApiTags("questRequestItems")
@common.Controller("questRequestItems")
export class QuestRequestItemsGrpcController extends QuestRequestItemsGrpcControllerBase {
  constructor(protected readonly service: QuestRequestItemsService) {
    super(service);
  }
}
