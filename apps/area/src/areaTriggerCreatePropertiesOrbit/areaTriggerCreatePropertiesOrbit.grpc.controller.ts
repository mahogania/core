import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AreaTriggerCreatePropertiesOrbitService } from "./areaTriggerCreatePropertiesOrbit.service";
import { AreaTriggerCreatePropertiesOrbitGrpcControllerBase } from "./base/areaTriggerCreatePropertiesOrbit.grpc.controller.base";

@swagger.ApiTags("areaTriggerCreatePropertiesOrbits")
@common.Controller("areaTriggerCreatePropertiesOrbits")
export class AreaTriggerCreatePropertiesOrbitGrpcController extends AreaTriggerCreatePropertiesOrbitGrpcControllerBase {
  constructor(
    protected readonly service: AreaTriggerCreatePropertiesOrbitService
  ) {
    super(service);
  }
}
