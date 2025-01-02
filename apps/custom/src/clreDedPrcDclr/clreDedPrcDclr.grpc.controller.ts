import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClreDedPrcDclrService } from "./clreDedPrcDclr.service";
import { ClreDedPrcDclrGrpcControllerBase } from "./base/clreDedPrcDclr.grpc.controller.base";

@swagger.ApiTags("clreDedPrcDclrs")
@common.Controller("clreDedPrcDclrs")
export class ClreDedPrcDclrGrpcController extends ClreDedPrcDclrGrpcControllerBase {
  constructor(protected readonly service: ClreDedPrcDclrService) {
    super(service);
  }
}
