import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClreDedMdlStszService } from "./clreDedMdlStsz.service";
import { ClreDedMdlStszControllerBase } from "./base/clreDedMdlStsz.controller.base";

@swagger.ApiTags("clreDedMdlStszs")
@common.Controller("clreDedMdlStszs")
export class ClreDedMdlStszController extends ClreDedMdlStszControllerBase {
  constructor(protected readonly service: ClreDedMdlStszService) {
    super(service);
  }
}
