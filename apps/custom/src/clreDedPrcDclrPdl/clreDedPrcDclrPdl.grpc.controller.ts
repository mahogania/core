import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClreDedPrcDclrPdlService } from "./clreDedPrcDclrPdl.service";
import { ClreDedPrcDclrPdlGrpcControllerBase } from "./base/clreDedPrcDclrPdl.grpc.controller.base";

@swagger.ApiTags("clreDedPrcDclrPdls")
@common.Controller("clreDedPrcDclrPdls")
export class ClreDedPrcDclrPdlGrpcController extends ClreDedPrcDclrPdlGrpcControllerBase {
  constructor(protected readonly service: ClreDedPrcDclrPdlService) {
    super(service);
  }
}
