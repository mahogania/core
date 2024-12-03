import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TbClreDedCntrService } from "./tbClreDedCntr.service";
import { TbClreDedCntrControllerBase } from "./base/tbClreDedCntr.controller.base";

@swagger.ApiTags("tbClreDedCntrs")
@common.Controller("tbClreDedCntrs")
export class TbClreDedCntrController extends TbClreDedCntrControllerBase {
  constructor(protected readonly service: TbClreDedCntrService) {
    super(service);
  }
}
