import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ScenarioRegionService } from "./scenarioRegion.service";
import { ScenarioRegionGrpcControllerBase } from "./base/scenarioRegion.grpc.controller.base";

@swagger.ApiTags("scenarioRegions")
@common.Controller("scenarioRegions")
export class ScenarioRegionGrpcController extends ScenarioRegionGrpcControllerBase {
  constructor(protected readonly service: ScenarioRegionService) {
    super(service);
  }
}
