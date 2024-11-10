import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeeGroupTableService } from "./employeeGroupTable.service";
import { EmployeeGroupTableControllerBase } from "./base/employeeGroupTable.controller.base";

@swagger.ApiTags("employeeGroupTables")
@common.Controller("employeeGroupTables")
export class EmployeeGroupTableController extends EmployeeGroupTableControllerBase {
  constructor(protected readonly service: EmployeeGroupTableService) {
    super(service);
  }
}
