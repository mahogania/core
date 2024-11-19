import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StrengthService } from "./strength.service";
import { StrengthGrpcControllerBase } from "./base/strength.grpc.controller.base";

@swagger.ApiTags("strengths")
@common.Controller("strengths")
export class StrengthGrpcController extends StrengthGrpcControllerBase {
  constructor(protected readonly service: StrengthService) {
    super(service);
  }
}
