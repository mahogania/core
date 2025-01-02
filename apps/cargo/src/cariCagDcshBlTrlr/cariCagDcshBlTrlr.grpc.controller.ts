import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CariCagDcshBlTrlrService } from "./cariCagDcshBlTrlr.service";
import { CariCagDcshBlTrlrGrpcControllerBase } from "./base/cariCagDcshBlTrlr.grpc.controller.base";

@swagger.ApiTags("cariCagDcshBlTrlrs")
@common.Controller("cariCagDcshBlTrlrs")
export class CariCagDcshBlTrlrGrpcController extends CariCagDcshBlTrlrGrpcControllerBase {
  constructor(protected readonly service: CariCagDcshBlTrlrService) {
    super(service);
  }
}
