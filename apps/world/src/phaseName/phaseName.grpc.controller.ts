import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PhaseNameService } from "./phaseName.service";
import { PhaseNameGrpcControllerBase } from "./base/phaseName.grpc.controller.base";

@swagger.ApiTags("phaseNames")
@common.Controller("phaseNames")
export class PhaseNameGrpcController extends PhaseNameGrpcControllerBase {
  constructor(protected readonly service: PhaseNameService) {
    super(service);
  }
}
