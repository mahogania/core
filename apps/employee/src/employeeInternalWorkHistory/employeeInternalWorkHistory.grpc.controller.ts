import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeeInternalWorkHistoryService } from "./employeeInternalWorkHistory.service";
import { EmployeeInternalWorkHistoryGrpcControllerBase } from "./base/employeeInternalWorkHistory.grpc.controller.base";

@swagger.ApiTags("employeeInternalWorkHistories")
@common.Controller("employeeInternalWorkHistories")
export class EmployeeInternalWorkHistoryGrpcController extends EmployeeInternalWorkHistoryGrpcControllerBase {
  constructor(protected readonly service: EmployeeInternalWorkHistoryService) {
    super(service);
  }
}
