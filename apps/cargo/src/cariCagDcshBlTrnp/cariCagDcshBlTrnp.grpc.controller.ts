import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CariCagDcshBlTrnpService } from "./cariCagDcshBlTrnp.service";
import { CariCagDcshBlTrnpGrpcControllerBase } from "./base/cariCagDcshBlTrnp.grpc.controller.base";

@swagger.ApiTags("cariCagDcshBlTrnps")
@common.Controller("cariCagDcshBlTrnps")
export class CariCagDcshBlTrnpGrpcController extends CariCagDcshBlTrnpGrpcControllerBase {
  constructor(protected readonly service: CariCagDcshBlTrnpService) {
    super(service);
  }
}
