import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WeaknessService } from "./weakness.service";
import { WeaknessGrpcControllerBase } from "./base/weakness.grpc.controller.base";

@swagger.ApiTags("weaknesses")
@common.Controller("weaknesses")
export class WeaknessGrpcController extends WeaknessGrpcControllerBase {
  constructor(protected readonly service: WeaknessService) {
    super(service);
  }
}
