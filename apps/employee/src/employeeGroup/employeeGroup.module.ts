import { Module } from "@nestjs/common";
import { EmployeeGroupModuleBase } from "./base/employeeGroup.module.base";
import { EmployeeGroupService } from "./employeeGroup.service";
import { EmployeeGroupController } from "./employeeGroup.controller";
import { EmployeeGroupGrpcController } from "./employeeGroup.grpc.controller";
import { EmployeeGroupResolver } from "./employeeGroup.resolver";

@Module({
  imports: [EmployeeGroupModuleBase],
  controllers: [EmployeeGroupController, EmployeeGroupGrpcController],
  providers: [EmployeeGroupService, EmployeeGroupResolver],
  exports: [EmployeeGroupService],
})
export class EmployeeGroupModule {}
