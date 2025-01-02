import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClreDedPrcDclrPdlService } from "./clreDedPrcDclrPdl.service";
import { ClreDedPrcDclrPdlControllerBase } from "./base/clreDedPrcDclrPdl.controller.base";

@swagger.ApiTags("clreDedPrcDclrPdls")
@common.Controller("clreDedPrcDclrPdls")
export class ClreDedPrcDclrPdlController extends ClreDedPrcDclrPdlControllerBase {
  constructor(protected readonly service: ClreDedPrcDclrPdlService) {
    super(service);
  }
}
