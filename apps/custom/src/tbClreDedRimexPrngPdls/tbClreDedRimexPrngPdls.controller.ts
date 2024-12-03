import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TbClreDedRimexPrngPdlsService } from "./tbClreDedRimexPrngPdls.service";
import { TbClreDedRimexPrngPdlsControllerBase } from "./base/tbClreDedRimexPrngPdls.controller.base";

@swagger.ApiTags("tbClreDedRimexPrngPdls")
@common.Controller("tbClreDedRimexPrngPdls")
export class TbClreDedRimexPrngPdlsController extends TbClreDedRimexPrngPdlsControllerBase {
  constructor(protected readonly service: TbClreDedRimexPrngPdlsService) {
    super(service);
  }
}
