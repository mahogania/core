import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeeService } from "./employee.service";
import { EmployeeGrpcControllerBase } from "./base/employee.grpc.controller.base";

@swagger.ApiTags("employees")
@common.Controller("employees")
export class EmployeeGrpcController extends EmployeeGrpcControllerBase {
  constructor(protected readonly service: EmployeeService) {
    super(service);
  }
}
