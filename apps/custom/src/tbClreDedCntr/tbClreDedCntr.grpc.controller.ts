import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TbClreDedCntrService } from "./tbClreDedCntr.service";
import { TbClreDedCntrGrpcControllerBase } from "./base/tbClreDedCntr.grpc.controller.base";

@swagger.ApiTags("tbClreDedCntrs")
@common.Controller("tbClreDedCntrs")
export class TbClreDedCntrGrpcController extends TbClreDedCntrGrpcControllerBase {
  constructor(protected readonly service: TbClreDedCntrService) {
    super(service);
  }
}
