import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ScenarioService } from "./scenario.service";
import { ScenarioGrpcControllerBase } from "./base/scenario.grpc.controller.base";

@swagger.ApiTags("scenarios")
@common.Controller("scenarios")
export class ScenarioGrpcController extends ScenarioGrpcControllerBase {
  constructor(protected readonly service: ScenarioService) {
    super(service);
  }
}
