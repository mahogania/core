import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClreDedMgService } from "./clreDedMg.service";
import { ClreDedMgControllerBase } from "./base/clreDedMg.controller.base";

@swagger.ApiTags("clreDedMgs")
@common.Controller("clreDedMgs")
export class ClreDedMgController extends ClreDedMgControllerBase {
  constructor(protected readonly service: ClreDedMgService) {
    super(service);
  }
}
