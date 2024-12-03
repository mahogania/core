import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TbClreDedPrcDclrPdlsService } from "./tbClreDedPrcDclrPdls.service";
import { TbClreDedPrcDclrPdlsControllerBase } from "./base/tbClreDedPrcDclrPdls.controller.base";

@swagger.ApiTags("tbClreDedPrcDclrPdls")
@common.Controller("tbClreDedPrcDclrPdls")
export class TbClreDedPrcDclrPdlsController extends TbClreDedPrcDclrPdlsControllerBase {
  constructor(protected readonly service: TbClreDedPrcDclrPdlsService) {
    super(service);
  }
}
