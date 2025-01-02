import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClreDedRwmService } from "./clreDedRwm.service";
import { ClreDedRwmControllerBase } from "./base/clreDedRwm.controller.base";

@swagger.ApiTags("clreDedRwms")
@common.Controller("clreDedRwms")
export class ClreDedRwmController extends ClreDedRwmControllerBase {
  constructor(protected readonly service: ClreDedRwmService) {
    super(service);
  }
}
