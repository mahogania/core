import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AreaScenarioTriggerService } from "./areaScenarioTrigger.service";
import { AreaScenarioTriggerGrpcControllerBase } from "./base/areaScenarioTrigger.grpc.controller.base";

@swagger.ApiTags("areaScenarioTriggers")
@common.Controller("areaScenarioTriggers")
export class AreaScenarioTriggerGrpcController extends AreaScenarioTriggerGrpcControllerBase {
  constructor(protected readonly service: AreaScenarioTriggerService) {
    super(service);
  }
}
