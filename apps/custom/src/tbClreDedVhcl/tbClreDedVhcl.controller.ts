import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TbClreDedVhclService } from "./tbClreDedVhcl.service";
import { TbClreDedVhclControllerBase } from "./base/tbClreDedVhcl.controller.base";

@swagger.ApiTags("tbClreDedVhcls")
@common.Controller("tbClreDedVhcls")
export class TbClreDedVhclController extends TbClreDedVhclControllerBase {
  constructor(protected readonly service: TbClreDedVhclService) {
    super(service);
  }
}
