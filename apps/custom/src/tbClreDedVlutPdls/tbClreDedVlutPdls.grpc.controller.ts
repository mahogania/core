import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TbClreDedVlutPdlsService } from "./tbClreDedVlutPdls.service";
import { TbClreDedVlutPdlsGrpcControllerBase } from "./base/tbClreDedVlutPdls.grpc.controller.base";

@swagger.ApiTags("tbClreDedVlutPdls")
@common.Controller("tbClreDedVlutPdls")
export class TbClreDedVlutPdlsGrpcController extends TbClreDedVlutPdlsGrpcControllerBase {
  constructor(protected readonly service: TbClreDedVlutPdlsService) {
    super(service);
  }
}
