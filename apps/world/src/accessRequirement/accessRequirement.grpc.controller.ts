import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AccessRequirementService } from "./accessRequirement.service";
import { AccessRequirementGrpcControllerBase } from "./base/accessRequirement.grpc.controller.base";

@swagger.ApiTags("accessRequirements")
@common.Controller("accessRequirements")
export class AccessRequirementGrpcController extends AccessRequirementGrpcControllerBase {
  constructor(protected readonly service: AccessRequirementService) {
    super(service);
  }
}
