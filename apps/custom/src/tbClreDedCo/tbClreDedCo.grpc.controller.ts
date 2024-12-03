import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TbClreDedCoService } from "./tbClreDedCo.service";
import { TbClreDedCoGrpcControllerBase } from "./base/tbClreDedCo.grpc.controller.base";

@swagger.ApiTags("tbClreDedCos")
@common.Controller("tbClreDedCos")
export class TbClreDedCoGrpcController extends TbClreDedCoGrpcControllerBase {
  constructor(protected readonly service: TbClreDedCoService) {
    super(service);
  }
}
