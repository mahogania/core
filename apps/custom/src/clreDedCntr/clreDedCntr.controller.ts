import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClreDedCntrService } from "./clreDedCntr.service";
import { ClreDedCntrControllerBase } from "./base/clreDedCntr.controller.base";

@swagger.ApiTags("clreDedCntrs")
@common.Controller("clreDedCntrs")
export class ClreDedCntrController extends ClreDedCntrControllerBase {
  constructor(protected readonly service: ClreDedCntrService) {
    super(service);
  }
}
