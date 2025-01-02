import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClreDedRwmService } from "./clreDedRwm.service";
import { ClreDedRwmGrpcControllerBase } from "./base/clreDedRwm.grpc.controller.base";

@swagger.ApiTags("clreDedRwms")
@common.Controller("clreDedRwms")
export class ClreDedRwmGrpcController extends ClreDedRwmGrpcControllerBase {
  constructor(protected readonly service: ClreDedRwmService) {
    super(service);
  }
}
