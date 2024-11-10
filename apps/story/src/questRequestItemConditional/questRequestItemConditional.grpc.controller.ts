import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestRequestItemConditionalService } from "./questRequestItemConditional.service";
import { QuestRequestItemConditionalGrpcControllerBase } from "./base/questRequestItemConditional.grpc.controller.base";

@swagger.ApiTags("questRequestItemConditionals")
@common.Controller("questRequestItemConditionals")
export class QuestRequestItemConditionalGrpcController extends QuestRequestItemConditionalGrpcControllerBase {
  constructor(protected readonly service: QuestRequestItemConditionalService) {
    super(service);
  }
}
