import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClreDedPdlsService } from "./clreDedPdls.service";
import { ClreDedPdlsGrpcControllerBase } from "./base/clreDedPdls.grpc.controller.base";

@swagger.ApiTags("clreDedPdls")
@common.Controller("clreDedPdls")
export class ClreDedPdlsGrpcController extends ClreDedPdlsGrpcControllerBase {
  constructor(protected readonly service: ClreDedPdlsService) {
    super(service);
  }
}
