import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TbClreDedPrcDclrService } from "./tbClreDedPrcDclr.service";
import { TbClreDedPrcDclrControllerBase } from "./base/tbClreDedPrcDclr.controller.base";

@swagger.ApiTags("tbClreDedPrcDclrs")
@common.Controller("tbClreDedPrcDclrs")
export class TbClreDedPrcDclrController extends TbClreDedPrcDclrControllerBase {
  constructor(protected readonly service: TbClreDedPrcDclrService) {
    super(service);
  }
}
