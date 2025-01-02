import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClreDedVlutComnService } from "./clreDedVlutComn.service";
import { ClreDedVlutComnGrpcControllerBase } from "./base/clreDedVlutComn.grpc.controller.base";

@swagger.ApiTags("clreDedVlutComns")
@common.Controller("clreDedVlutComns")
export class ClreDedVlutComnGrpcController extends ClreDedVlutComnGrpcControllerBase {
  constructor(protected readonly service: ClreDedVlutComnService) {
    super(service);
  }
}
