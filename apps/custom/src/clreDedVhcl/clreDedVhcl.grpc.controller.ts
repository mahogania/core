import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClreDedVhclService } from "./clreDedVhcl.service";
import { ClreDedVhclGrpcControllerBase } from "./base/clreDedVhcl.grpc.controller.base";

@swagger.ApiTags("clreDedVhcls")
@common.Controller("clreDedVhcls")
export class ClreDedVhclGrpcController extends ClreDedVhclGrpcControllerBase {
  constructor(protected readonly service: ClreDedVhclService) {
    super(service);
  }
}
