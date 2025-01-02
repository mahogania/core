import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CariCagDcshBlCntrService } from "./cariCagDcshBlCntr.service";
import { CariCagDcshBlCntrGrpcControllerBase } from "./base/cariCagDcshBlCntr.grpc.controller.base";

@swagger.ApiTags("cariCagDcshBlCntrs")
@common.Controller("cariCagDcshBlCntrs")
export class CariCagDcshBlCntrGrpcController extends CariCagDcshBlCntrGrpcControllerBase {
  constructor(protected readonly service: CariCagDcshBlCntrService) {
    super(service);
  }
}
