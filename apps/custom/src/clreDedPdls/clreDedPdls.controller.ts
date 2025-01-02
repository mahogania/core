import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClreDedPdlsService } from "./clreDedPdls.service";
import { ClreDedPdlsControllerBase } from "./base/clreDedPdls.controller.base";

@swagger.ApiTags("clreDedPdls")
@common.Controller("clreDedPdls")
export class ClreDedPdlsController extends ClreDedPdlsControllerBase {
  constructor(protected readonly service: ClreDedPdlsService) {
    super(service);
  }
}
