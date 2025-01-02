import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClreDedComnService } from "./clreDedComn.service";
import { ClreDedComnControllerBase } from "./base/clreDedComn.controller.base";

@swagger.ApiTags("clreDedComns")
@common.Controller("clreDedComns")
export class ClreDedComnController extends ClreDedComnControllerBase {
  constructor(protected readonly service: ClreDedComnService) {
    super(service);
  }
}
