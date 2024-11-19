import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeeEducationService } from "./employeeEducation.service";
import { EmployeeEducationGrpcControllerBase } from "./base/employeeEducation.grpc.controller.base";

@swagger.ApiTags("employeeEducations")
@common.Controller("employeeEducations")
export class EmployeeEducationGrpcController extends EmployeeEducationGrpcControllerBase {
  constructor(protected readonly service: EmployeeEducationService) {
    super(service);
  }
}
