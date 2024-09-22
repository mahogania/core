import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AreaTriggerCreatePropertiesSplinePointService } from "./areaTriggerCreatePropertiesSplinePoint.service";
import { AreaTriggerCreatePropertiesSplinePointGrpcControllerBase } from "./base/areaTriggerCreatePropertiesSplinePoint.grpc.controller.base";

@swagger.ApiTags("areaTriggerCreatePropertiesSplinePoints")
@common.Controller("areaTriggerCreatePropertiesSplinePoints")
export class AreaTriggerCreatePropertiesSplinePointGrpcController extends AreaTriggerCreatePropertiesSplinePointGrpcControllerBase {
  constructor(
    protected readonly service: AreaTriggerCreatePropertiesSplinePointService
  ) {
    super(service);
  }
}
