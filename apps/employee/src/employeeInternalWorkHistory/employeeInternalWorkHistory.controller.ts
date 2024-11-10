import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeeInternalWorkHistoryService } from "./employeeInternalWorkHistory.service";
import { EmployeeInternalWorkHistoryControllerBase } from "./base/employeeInternalWorkHistory.controller.base";

@swagger.ApiTags("employeeInternalWorkHistories")
@common.Controller("employeeInternalWorkHistories")
export class EmployeeInternalWorkHistoryController extends EmployeeInternalWorkHistoryControllerBase {
  constructor(protected readonly service: EmployeeInternalWorkHistoryService) {
    super(service);
  }
}
