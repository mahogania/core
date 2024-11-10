import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AreaService } from "./area.service";
import { AreaGrpcControllerBase } from "./base/area.grpc.controller.base";

@swagger.ApiTags("areas")
@common.Controller("areas")
export class AreaGrpcController extends AreaGrpcControllerBase {
  constructor(protected readonly service: AreaService) {
    super(service);
  }
}
