import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClreDedCntrService } from "./clreDedCntr.service";
import { ClreDedCntrGrpcControllerBase } from "./base/clreDedCntr.grpc.controller.base";

@swagger.ApiTags("clreDedCntrs")
@common.Controller("clreDedCntrs")
export class ClreDedCntrGrpcController extends ClreDedCntrGrpcControllerBase {
  constructor(protected readonly service: ClreDedCntrService) {
    super(service);
  }
}
