import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TbClreDedPdlsService } from "./tbClreDedPdls.service";
import { TbClreDedPdlsControllerBase } from "./base/tbClreDedPdls.controller.base";

@swagger.ApiTags("tbClreDedPdls")
@common.Controller("tbClreDedPdls")
export class TbClreDedPdlsController extends TbClreDedPdlsControllerBase {
  constructor(protected readonly service: TbClreDedPdlsService) {
    super(service);
  }
}
