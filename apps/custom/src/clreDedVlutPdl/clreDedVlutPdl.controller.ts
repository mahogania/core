import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClreDedVlutPdlService } from "./clreDedVlutPdl.service";
import { ClreDedVlutPdlControllerBase } from "./base/clreDedVlutPdl.controller.base";

@swagger.ApiTags("clreDedVlutPdls")
@common.Controller("clreDedVlutPdls")
export class ClreDedVlutPdlController extends ClreDedVlutPdlControllerBase {
  constructor(protected readonly service: ClreDedVlutPdlService) {
    super(service);
  }
}
