import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClreDedCoService } from "./clreDedCo.service";
import { ClreDedCoControllerBase } from "./base/clreDedCo.controller.base";

@swagger.ApiTags("clreDedCos")
@common.Controller("clreDedCos")
export class ClreDedCoController extends ClreDedCoControllerBase {
  constructor(protected readonly service: ClreDedCoService) {
    super(service);
  }
}
