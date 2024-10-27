import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestCompletionConditionalService } from "./questCompletionConditional.service";
import { QuestCompletionConditionalGrpcControllerBase } from "./base/questCompletionConditional.grpc.controller.base";

@swagger.ApiTags("questCompletionConditionals")
@common.Controller("questCompletionConditionals")
export class QuestCompletionConditionalGrpcController extends QuestCompletionConditionalGrpcControllerBase {
  constructor(protected readonly service: QuestCompletionConditionalService) {
    super(service);
  }
}
