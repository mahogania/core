import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClreDedRimexPrngPdlService } from "./clreDedRimexPrngPdl.service";
import { ClreDedRimexPrngPdlGrpcControllerBase } from "./base/clreDedRimexPrngPdl.grpc.controller.base";

@swagger.ApiTags("clreDedRimexPrngPdls")
@common.Controller("clreDedRimexPrngPdls")
export class ClreDedRimexPrngPdlGrpcController extends ClreDedRimexPrngPdlGrpcControllerBase {
  constructor(protected readonly service: ClreDedRimexPrngPdlService) {
    super(service);
  }
}
