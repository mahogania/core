import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { JumpChargeParamsService } from "./jumpChargeParams.service";
import { JumpChargeParamsGrpcControllerBase } from "./base/jumpChargeParams.grpc.controller.base";

@swagger.ApiTags("jumpChargeParams")
@common.Controller("jumpChargeParams")
export class JumpChargeParamsGrpcController extends JumpChargeParamsGrpcControllerBase {
  constructor(protected readonly service: JumpChargeParamsService) {
    super(service);
  }
}
