import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeeGroupTableService } from "./employeeGroupTable.service";
import { EmployeeGroupTableGrpcControllerBase } from "./base/employeeGroupTable.grpc.controller.base";

@swagger.ApiTags("employeeGroupTables")
@common.Controller("employeeGroupTables")
export class EmployeeGroupTableGrpcController extends EmployeeGroupTableGrpcControllerBase {
  constructor(protected readonly service: EmployeeGroupTableService) {
    super(service);
  }
}
