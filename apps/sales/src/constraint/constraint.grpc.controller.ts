import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ConstraintService } from "./constraint.service";
import { ConstraintGrpcControllerBase } from "./base/constraint.grpc.controller.base";

@swagger.ApiTags("constraints")
@common.Controller("constraints")
export class ConstraintGrpcController extends ConstraintGrpcControllerBase {
  constructor(protected readonly service: ConstraintService) {
    super(service);
  }
}
