import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TbClreDedVlutPdlsService } from "./tbClreDedVlutPdls.service";
import { TbClreDedVlutPdlsControllerBase } from "./base/tbClreDedVlutPdls.controller.base";

@swagger.ApiTags("tbClreDedVlutPdls")
@common.Controller("tbClreDedVlutPdls")
export class TbClreDedVlutPdlsController extends TbClreDedVlutPdlsControllerBase {
  constructor(protected readonly service: TbClreDedVlutPdlsService) {
    super(service);
  }
}
