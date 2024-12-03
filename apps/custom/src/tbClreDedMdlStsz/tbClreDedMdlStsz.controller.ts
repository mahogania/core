import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TbClreDedMdlStszService } from "./tbClreDedMdlStsz.service";
import { TbClreDedMdlStszControllerBase } from "./base/tbClreDedMdlStsz.controller.base";

@swagger.ApiTags("tbClreDedMdlStszs")
@common.Controller("tbClreDedMdlStszs")
export class TbClreDedMdlStszController extends TbClreDedMdlStszControllerBase {
  constructor(protected readonly service: TbClreDedMdlStszService) {
    super(service);
  }
}
