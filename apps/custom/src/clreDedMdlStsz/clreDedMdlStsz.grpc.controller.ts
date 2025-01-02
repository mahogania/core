import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClreDedMdlStszService } from "./clreDedMdlStsz.service";
import { ClreDedMdlStszGrpcControllerBase } from "./base/clreDedMdlStsz.grpc.controller.base";

@swagger.ApiTags("clreDedMdlStszs")
@common.Controller("clreDedMdlStszs")
export class ClreDedMdlStszGrpcController extends ClreDedMdlStszGrpcControllerBase {
  constructor(protected readonly service: ClreDedMdlStszService) {
    super(service);
  }
}
