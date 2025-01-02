import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClreDedVlutComnService } from "./clreDedVlutComn.service";
import { ClreDedVlutComnControllerBase } from "./base/clreDedVlutComn.controller.base";

@swagger.ApiTags("clreDedVlutComns")
@common.Controller("clreDedVlutComns")
export class ClreDedVlutComnController extends ClreDedVlutComnControllerBase {
  constructor(protected readonly service: ClreDedVlutComnService) {
    super(service);
  }
}
