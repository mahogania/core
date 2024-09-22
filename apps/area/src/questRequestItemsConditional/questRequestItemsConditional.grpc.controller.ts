import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestRequestItemsConditionalService } from "./questRequestItemsConditional.service";
import { QuestRequestItemsConditionalGrpcControllerBase } from "./base/questRequestItemsConditional.grpc.controller.base";

@swagger.ApiTags("questRequestItemsConditionals")
@common.Controller("questRequestItemsConditionals")
export class QuestRequestItemsConditionalGrpcController extends QuestRequestItemsConditionalGrpcControllerBase {
  constructor(protected readonly service: QuestRequestItemsConditionalService) {
    super(service);
  }
}
