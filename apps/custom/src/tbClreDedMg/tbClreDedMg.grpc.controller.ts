import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TbClreDedMgService } from "./tbClreDedMg.service";
import { TbClreDedMgGrpcControllerBase } from "./base/tbClreDedMg.grpc.controller.base";

@swagger.ApiTags("tbClreDedMgs")
@common.Controller("tbClreDedMgs")
export class TbClreDedMgGrpcController extends TbClreDedMgGrpcControllerBase {
  constructor(protected readonly service: TbClreDedMgService) {
    super(service);
  }
}
