import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TbClreDedPrcDclrService } from "./tbClreDedPrcDclr.service";
import { TbClreDedPrcDclrGrpcControllerBase } from "./base/tbClreDedPrcDclr.grpc.controller.base";

@swagger.ApiTags("tbClreDedPrcDclrs")
@common.Controller("tbClreDedPrcDclrs")
export class TbClreDedPrcDclrGrpcController extends TbClreDedPrcDclrGrpcControllerBase {
  constructor(protected readonly service: TbClreDedPrcDclrService) {
    super(service);
  }
}
