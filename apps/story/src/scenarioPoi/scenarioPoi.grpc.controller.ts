import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ScenarioPoiService } from "./scenarioPoi.service";
import { ScenarioPoiGrpcControllerBase } from "./base/scenarioPoi.grpc.controller.base";

@swagger.ApiTags("scenarioPois")
@common.Controller("scenarioPois")
export class ScenarioPoiGrpcController extends ScenarioPoiGrpcControllerBase {
  constructor(protected readonly service: ScenarioPoiService) {
    super(service);
  }
}
