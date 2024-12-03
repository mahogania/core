import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeeEducationService } from "./employeeEducation.service";
import { EmployeeEducationControllerBase } from "./base/employeeEducation.controller.base";

@swagger.ApiTags("employeeEducations")
@common.Controller("employeeEducations")
export class EmployeeEducationController extends EmployeeEducationControllerBase {
  constructor(protected readonly service: EmployeeEducationService) {
    super(service);
  }
}
