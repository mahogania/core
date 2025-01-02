import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClreDedVlutPdlService } from "./clreDedVlutPdl.service";
import { ClreDedVlutPdlGrpcControllerBase } from "./base/clreDedVlutPdl.grpc.controller.base";

@swagger.ApiTags("clreDedVlutPdls")
@common.Controller("clreDedVlutPdls")
export class ClreDedVlutPdlGrpcController extends ClreDedVlutPdlGrpcControllerBase {
  constructor(protected readonly service: ClreDedVlutPdlService) {
    super(service);
  }
}
