import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CariCagDcshBlTrnpService } from "./cariCagDcshBlTrnp.service";
import { CariCagDcshBlTrnpControllerBase } from "./base/cariCagDcshBlTrnp.controller.base";

@swagger.ApiTags("cariCagDcshBlTrnps")
@common.Controller("cariCagDcshBlTrnps")
export class CariCagDcshBlTrnpController extends CariCagDcshBlTrnpControllerBase {
  constructor(protected readonly service: CariCagDcshBlTrnpService) {
    super(service);
  }
}
