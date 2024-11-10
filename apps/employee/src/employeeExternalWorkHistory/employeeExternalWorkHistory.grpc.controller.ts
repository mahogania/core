import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeeExternalWorkHistoryService } from "./employeeExternalWorkHistory.service";
import { EmployeeExternalWorkHistoryGrpcControllerBase } from "./base/employeeExternalWorkHistory.grpc.controller.base";

@swagger.ApiTags("employeeExternalWorkHistories")
@common.Controller("employeeExternalWorkHistories")
export class EmployeeExternalWorkHistoryGrpcController extends EmployeeExternalWorkHistoryGrpcControllerBase {
  constructor(protected readonly service: EmployeeExternalWorkHistoryService) {
    super(service);
  }
}
