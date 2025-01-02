import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClreDedPrcDclrService } from "./clreDedPrcDclr.service";
import { ClreDedPrcDclrControllerBase } from "./base/clreDedPrcDclr.controller.base";

@swagger.ApiTags("clreDedPrcDclrs")
@common.Controller("clreDedPrcDclrs")
export class ClreDedPrcDclrController extends ClreDedPrcDclrControllerBase {
  constructor(protected readonly service: ClreDedPrcDclrService) {
    super(service);
  }
}
