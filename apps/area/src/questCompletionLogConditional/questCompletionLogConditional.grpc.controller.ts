import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestCompletionLogConditionalService } from "./questCompletionLogConditional.service";
import { QuestCompletionLogConditionalGrpcControllerBase } from "./base/questCompletionLogConditional.grpc.controller.base";

@swagger.ApiTags("questCompletionLogConditionals")
@common.Controller("questCompletionLogConditionals")
export class QuestCompletionLogConditionalGrpcController extends QuestCompletionLogConditionalGrpcControllerBase {
  constructor(
    protected readonly service: QuestCompletionLogConditionalService
  ) {
    super(service);
  }
}
