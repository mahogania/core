import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TbClreDedCoService } from "./tbClreDedCo.service";
import { TbClreDedCoControllerBase } from "./base/tbClreDedCo.controller.base";

@swagger.ApiTags("tbClreDedCos")
@common.Controller("tbClreDedCos")
export class TbClreDedCoController extends TbClreDedCoControllerBase {
  constructor(protected readonly service: TbClreDedCoService) {
    super(service);
  }
}
