import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CariCagDcshBlTrlrService } from "./cariCagDcshBlTrlr.service";
import { CariCagDcshBlTrlrControllerBase } from "./base/cariCagDcshBlTrlr.controller.base";

@swagger.ApiTags("cariCagDcshBlTrlrs")
@common.Controller("cariCagDcshBlTrlrs")
export class CariCagDcshBlTrlrController extends CariCagDcshBlTrlrControllerBase {
  constructor(protected readonly service: CariCagDcshBlTrlrService) {
    super(service);
  }
}
