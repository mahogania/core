import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CariCagDcshBlVhclService } from "./cariCagDcshBlVhcl.service";
import { CariCagDcshBlVhclGrpcControllerBase } from "./base/cariCagDcshBlVhcl.grpc.controller.base";

@swagger.ApiTags("cariCagDcshBlVhcls")
@common.Controller("cariCagDcshBlVhcls")
export class CariCagDcshBlVhclGrpcController extends CariCagDcshBlVhclGrpcControllerBase {
  constructor(protected readonly service: CariCagDcshBlVhclService) {
    super(service);
  }
}
