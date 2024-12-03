import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TbClreDedPrcDclrPdlsService } from "./tbClreDedPrcDclrPdls.service";
import { TbClreDedPrcDclrPdlsGrpcControllerBase } from "./base/tbClreDedPrcDclrPdls.grpc.controller.base";

@swagger.ApiTags("tbClreDedPrcDclrPdls")
@common.Controller("tbClreDedPrcDclrPdls")
export class TbClreDedPrcDclrPdlsGrpcController extends TbClreDedPrcDclrPdlsGrpcControllerBase {
  constructor(protected readonly service: TbClreDedPrcDclrPdlsService) {
    super(service);
  }
}
