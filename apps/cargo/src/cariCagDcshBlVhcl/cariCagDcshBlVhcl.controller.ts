import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CariCagDcshBlVhclService } from "./cariCagDcshBlVhcl.service";
import { CariCagDcshBlVhclControllerBase } from "./base/cariCagDcshBlVhcl.controller.base";

@swagger.ApiTags("cariCagDcshBlVhcls")
@common.Controller("cariCagDcshBlVhcls")
export class CariCagDcshBlVhclController extends CariCagDcshBlVhclControllerBase {
  constructor(protected readonly service: CariCagDcshBlVhclService) {
    super(service);
  }
}
