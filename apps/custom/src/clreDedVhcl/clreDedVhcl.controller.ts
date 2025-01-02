import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClreDedVhclService } from "./clreDedVhcl.service";
import { ClreDedVhclControllerBase } from "./base/clreDedVhcl.controller.base";

@swagger.ApiTags("clreDedVhcls")
@common.Controller("clreDedVhcls")
export class ClreDedVhclController extends ClreDedVhclControllerBase {
  constructor(protected readonly service: ClreDedVhclService) {
    super(service);
  }
}
