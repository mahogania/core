import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TbClreDedVhclService } from "./tbClreDedVhcl.service";
import { TbClreDedVhclGrpcControllerBase } from "./base/tbClreDedVhcl.grpc.controller.base";

@swagger.ApiTags("tbClreDedVhcls")
@common.Controller("tbClreDedVhcls")
export class TbClreDedVhclGrpcController extends TbClreDedVhclGrpcControllerBase {
  constructor(protected readonly service: TbClreDedVhclService) {
    super(service);
  }
}
