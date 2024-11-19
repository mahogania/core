import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeeGroupService } from "./employeeGroup.service";
import { EmployeeGroupGrpcControllerBase } from "./base/employeeGroup.grpc.controller.base";

@swagger.ApiTags("employeeGroups")
@common.Controller("employeeGroups")
export class EmployeeGroupGrpcController extends EmployeeGroupGrpcControllerBase {
  constructor(protected readonly service: EmployeeGroupService) {
    super(service);
  }
}
