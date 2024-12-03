import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeeGroupService } from "./employeeGroup.service";
import { EmployeeGroupControllerBase } from "./base/employeeGroup.controller.base";

@swagger.ApiTags("employeeGroups")
@common.Controller("employeeGroups")
export class EmployeeGroupController extends EmployeeGroupControllerBase {
  constructor(protected readonly service: EmployeeGroupService) {
    super(service);
  }
}
