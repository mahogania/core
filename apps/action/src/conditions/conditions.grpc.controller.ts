import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ConditionsService } from "./conditions.service";
import { ConditionsGrpcControllerBase } from "./base/conditions.grpc.controller.base";

@swagger.ApiTags("conditions")
@common.Controller("conditions")
export class ConditionsGrpcController extends ConditionsGrpcControllerBase {
  constructor(protected readonly service: ConditionsService) {
    super(service);
  }
}
