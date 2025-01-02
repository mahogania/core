import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CariCagDcshBlCntrService } from "./cariCagDcshBlCntr.service";
import { CariCagDcshBlCntrControllerBase } from "./base/cariCagDcshBlCntr.controller.base";

@swagger.ApiTags("cariCagDcshBlCntrs")
@common.Controller("cariCagDcshBlCntrs")
export class CariCagDcshBlCntrController extends CariCagDcshBlCntrControllerBase {
  constructor(protected readonly service: CariCagDcshBlCntrService) {
    super(service);
  }
}
