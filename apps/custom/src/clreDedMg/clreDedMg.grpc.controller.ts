import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClreDedMgService } from "./clreDedMg.service";
import { ClreDedMgGrpcControllerBase } from "./base/clreDedMg.grpc.controller.base";

@swagger.ApiTags("clreDedMgs")
@common.Controller("clreDedMgs")
export class ClreDedMgGrpcController extends ClreDedMgGrpcControllerBase {
  constructor(protected readonly service: ClreDedMgService) {
    super(service);
  }
}
