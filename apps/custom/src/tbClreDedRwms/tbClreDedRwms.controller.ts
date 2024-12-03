import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TbClreDedRwmsService } from "./tbClreDedRwms.service";
import { TbClreDedRwmsControllerBase } from "./base/tbClreDedRwms.controller.base";

@swagger.ApiTags("tbClreDedRwms")
@common.Controller("tbClreDedRwms")
export class TbClreDedRwmsController extends TbClreDedRwmsControllerBase {
  constructor(protected readonly service: TbClreDedRwmsService) {
    super(service);
  }
}
