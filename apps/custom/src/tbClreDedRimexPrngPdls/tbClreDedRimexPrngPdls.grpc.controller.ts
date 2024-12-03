import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TbClreDedRimexPrngPdlsService } from "./tbClreDedRimexPrngPdls.service";
import { TbClreDedRimexPrngPdlsGrpcControllerBase } from "./base/tbClreDedRimexPrngPdls.grpc.controller.base";

@swagger.ApiTags("tbClreDedRimexPrngPdls")
@common.Controller("tbClreDedRimexPrngPdls")
export class TbClreDedRimexPrngPdlsGrpcController extends TbClreDedRimexPrngPdlsGrpcControllerBase {
  constructor(protected readonly service: TbClreDedRimexPrngPdlsService) {
    super(service);
  }
}
