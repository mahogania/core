import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PhaseAreaService } from "./phaseArea.service";
import { PhaseAreaGrpcControllerBase } from "./base/phaseArea.grpc.controller.base";

@swagger.ApiTags("phaseAreas")
@common.Controller("phaseAreas")
export class PhaseAreaGrpcController extends PhaseAreaGrpcControllerBase {
  constructor(protected readonly service: PhaseAreaService) {
    super(service);
  }
}
