import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AreaQuestTriggerService } from "./areaQuestTrigger.service";
import { AreaQuestTriggerGrpcControllerBase } from "./base/areaQuestTrigger.grpc.controller.base";

@swagger.ApiTags("areaQuestTriggers")
@common.Controller("areaQuestTriggers")
export class AreaQuestTriggerGrpcController extends AreaQuestTriggerGrpcControllerBase {
  constructor(protected readonly service: AreaQuestTriggerService) {
    super(service);
  }
}
