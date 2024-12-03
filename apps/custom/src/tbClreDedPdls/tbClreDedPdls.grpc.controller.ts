import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TbClreDedPdlsService } from "./tbClreDedPdls.service";
import { TbClreDedPdlsGrpcControllerBase } from "./base/tbClreDedPdls.grpc.controller.base";

@swagger.ApiTags("tbClreDedPdls")
@common.Controller("tbClreDedPdls")
export class TbClreDedPdlsGrpcController extends TbClreDedPdlsGrpcControllerBase {
  constructor(protected readonly service: TbClreDedPdlsService) {
    super(service);
  }
}
