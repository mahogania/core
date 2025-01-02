import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClreDedComnService } from "./clreDedComn.service";
import { ClreDedComnGrpcControllerBase } from "./base/clreDedComn.grpc.controller.base";

@swagger.ApiTags("clreDedComns")
@common.Controller("clreDedComns")
export class ClreDedComnGrpcController extends ClreDedComnGrpcControllerBase {
  constructor(protected readonly service: ClreDedComnService) {
    super(service);
  }
}
