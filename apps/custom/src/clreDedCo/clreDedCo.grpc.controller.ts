import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClreDedCoService } from "./clreDedCo.service";
import { ClreDedCoGrpcControllerBase } from "./base/clreDedCo.grpc.controller.base";

@swagger.ApiTags("clreDedCos")
@common.Controller("clreDedCos")
export class ClreDedCoGrpcController extends ClreDedCoGrpcControllerBase {
  constructor(protected readonly service: ClreDedCoService) {
    super(service);
  }
}
