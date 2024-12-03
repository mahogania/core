import { Module } from "@nestjs/common";
import { EmployeeEducationModuleBase } from "./base/employeeEducation.module.base";
import { EmployeeEducationService } from "./employeeEducation.service";
import { EmployeeEducationController } from "./employeeEducation.controller";
import { EmployeeEducationGrpcController } from "./employeeEducation.grpc.controller";
import { EmployeeEducationResolver } from "./employeeEducation.resolver";

@Module({
  imports: [EmployeeEducationModuleBase],
  controllers: [EmployeeEducationController, EmployeeEducationGrpcController],
  providers: [EmployeeEducationService, EmployeeEducationResolver],
  exports: [EmployeeEducationService],
})
export class EmployeeEducationModule {}
