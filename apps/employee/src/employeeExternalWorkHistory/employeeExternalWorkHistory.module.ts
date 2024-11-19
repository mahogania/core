import { Module } from "@nestjs/common";
import { EmployeeExternalWorkHistoryModuleBase } from "./base/employeeExternalWorkHistory.module.base";
import { EmployeeExternalWorkHistoryService } from "./employeeExternalWorkHistory.service";
import { EmployeeExternalWorkHistoryController } from "./employeeExternalWorkHistory.controller";
import { EmployeeExternalWorkHistoryGrpcController } from "./employeeExternalWorkHistory.grpc.controller";
import { EmployeeExternalWorkHistoryResolver } from "./employeeExternalWorkHistory.resolver";

@Module({
  imports: [EmployeeExternalWorkHistoryModuleBase],
  controllers: [
    EmployeeExternalWorkHistoryController,
    EmployeeExternalWorkHistoryGrpcController,
  ],
  providers: [
    EmployeeExternalWorkHistoryService,
    EmployeeExternalWorkHistoryResolver,
  ],
  exports: [EmployeeExternalWorkHistoryService],
})
export class EmployeeExternalWorkHistoryModule {}
