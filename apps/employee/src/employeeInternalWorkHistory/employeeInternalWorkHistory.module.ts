import { Module } from "@nestjs/common";
import { EmployeeInternalWorkHistoryModuleBase } from "./base/employeeInternalWorkHistory.module.base";
import { EmployeeInternalWorkHistoryService } from "./employeeInternalWorkHistory.service";
import { EmployeeInternalWorkHistoryController } from "./employeeInternalWorkHistory.controller";
import { EmployeeInternalWorkHistoryGrpcController } from "./employeeInternalWorkHistory.grpc.controller";
import { EmployeeInternalWorkHistoryResolver } from "./employeeInternalWorkHistory.resolver";

@Module({
  imports: [EmployeeInternalWorkHistoryModuleBase],
  controllers: [
    EmployeeInternalWorkHistoryController,
    EmployeeInternalWorkHistoryGrpcController,
  ],
  providers: [
    EmployeeInternalWorkHistoryService,
    EmployeeInternalWorkHistoryResolver,
  ],
  exports: [EmployeeInternalWorkHistoryService],
})
export class EmployeeInternalWorkHistoryModule {}
