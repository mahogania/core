import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TbClreDedMdlStszService } from "./tbClreDedMdlStsz.service";
import { TbClreDedMdlStszGrpcControllerBase } from "./base/tbClreDedMdlStsz.grpc.controller.base";

@swagger.ApiTags("tbClreDedMdlStszs")
@common.Controller("tbClreDedMdlStszs")
export class TbClreDedMdlStszGrpcController extends TbClreDedMdlStszGrpcControllerBase {
  constructor(protected readonly service: TbClreDedMdlStszService) {
    super(service);
  }
}
