import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AreaTriggerCreatePropertyService } from "./areaTriggerCreateProperty.service";
import { AreaTriggerCreatePropertyGrpcControllerBase } from "./base/areaTriggerCreateProperty.grpc.controller.base";

@swagger.ApiTags("areaTriggerCreateProperties")
@common.Controller("areaTriggerCreateProperties")
export class AreaTriggerCreatePropertyGrpcController extends AreaTriggerCreatePropertyGrpcControllerBase {
  constructor(protected readonly service: AreaTriggerCreatePropertyService) {
    super(service);
  }
}
