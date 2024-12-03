import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TbClreDedRwmsService } from "./tbClreDedRwms.service";
import { TbClreDedRwmsGrpcControllerBase } from "./base/tbClreDedRwms.grpc.controller.base";

@swagger.ApiTags("tbClreDedRwms")
@common.Controller("tbClreDedRwms")
export class TbClreDedRwmsGrpcController extends TbClreDedRwmsGrpcControllerBase {
  constructor(protected readonly service: TbClreDedRwmsService) {
    super(service);
  }
}
