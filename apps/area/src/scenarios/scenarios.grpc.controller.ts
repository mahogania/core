import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ScenariosService } from "./scenarios.service";
import { ScenariosGrpcControllerBase } from "./base/scenarios.grpc.controller.base";

@swagger.ApiTags("scenarios")
@common.Controller("scenarios")
export class ScenariosGrpcController extends ScenariosGrpcControllerBase {
  constructor(protected readonly service: ScenariosService) {
    super(service);
  }
}
