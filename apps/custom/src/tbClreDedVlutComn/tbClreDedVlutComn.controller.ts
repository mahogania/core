import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TbClreDedVlutComnService } from "./tbClreDedVlutComn.service";
import { TbClreDedVlutComnControllerBase } from "./base/tbClreDedVlutComn.controller.base";

@swagger.ApiTags("tbClreDedVlutComns")
@common.Controller("tbClreDedVlutComns")
export class TbClreDedVlutComnController extends TbClreDedVlutComnControllerBase {
  constructor(protected readonly service: TbClreDedVlutComnService) {
    super(service);
  }
}
