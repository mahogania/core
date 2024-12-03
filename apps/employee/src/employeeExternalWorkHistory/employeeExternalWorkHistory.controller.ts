import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeeExternalWorkHistoryService } from "./employeeExternalWorkHistory.service";
import { EmployeeExternalWorkHistoryControllerBase } from "./base/employeeExternalWorkHistory.controller.base";

@swagger.ApiTags("employeeExternalWorkHistories")
@common.Controller("employeeExternalWorkHistories")
export class EmployeeExternalWorkHistoryController extends EmployeeExternalWorkHistoryControllerBase {
  constructor(protected readonly service: EmployeeExternalWorkHistoryService) {
    super(service);
  }
}
