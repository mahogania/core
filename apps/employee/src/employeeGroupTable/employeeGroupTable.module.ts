import { Module } from "@nestjs/common";
import { EmployeeGroupTableModuleBase } from "./base/employeeGroupTable.module.base";
import { EmployeeGroupTableService } from "./employeeGroupTable.service";
import { EmployeeGroupTableController } from "./employeeGroupTable.controller";
import { EmployeeGroupTableGrpcController } from "./employeeGroupTable.grpc.controller";
import { EmployeeGroupTableResolver } from "./employeeGroupTable.resolver";

@Module({
  imports: [EmployeeGroupTableModuleBase],
  controllers: [EmployeeGroupTableController, EmployeeGroupTableGrpcController],
  providers: [EmployeeGroupTableService, EmployeeGroupTableResolver],
  exports: [EmployeeGroupTableService],
})
export class EmployeeGroupTableModule {}
