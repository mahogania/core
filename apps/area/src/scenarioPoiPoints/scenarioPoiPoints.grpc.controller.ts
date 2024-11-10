import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ScenarioPoiPointsService } from "./scenarioPoiPoints.service";
import { ScenarioPoiPointsGrpcControllerBase } from "./base/scenarioPoiPoints.grpc.controller.base";

@swagger.ApiTags("scenarioPoiPoints")
@common.Controller("scenarioPoiPoints")
export class ScenarioPoiPointsGrpcController extends ScenarioPoiPointsGrpcControllerBase {
  constructor(protected readonly service: ScenarioPoiPointsService) {
    super(service);
  }
}
