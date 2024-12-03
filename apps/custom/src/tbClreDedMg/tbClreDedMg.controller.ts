import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TbClreDedMgService } from "./tbClreDedMg.service";
import { TbClreDedMgControllerBase } from "./base/tbClreDedMg.controller.base";

@swagger.ApiTags("tbClreDedMgs")
@common.Controller("tbClreDedMgs")
export class TbClreDedMgController extends TbClreDedMgControllerBase {
  constructor(protected readonly service: TbClreDedMgService) {
    super(service);
  }
}
