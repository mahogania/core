import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClreDedRimexPrngPdlService } from "./clreDedRimexPrngPdl.service";
import { ClreDedRimexPrngPdlControllerBase } from "./base/clreDedRimexPrngPdl.controller.base";

@swagger.ApiTags("clreDedRimexPrngPdls")
@common.Controller("clreDedRimexPrngPdls")
export class ClreDedRimexPrngPdlController extends ClreDedRimexPrngPdlControllerBase {
  constructor(protected readonly service: ClreDedRimexPrngPdlService) {
    super(service);
  }
}
