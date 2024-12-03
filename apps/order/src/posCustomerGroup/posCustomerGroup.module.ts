import { Module } from "@nestjs/common";
import { PosCustomerGroupModuleBase } from "./base/posCustomerGroup.module.base";
import { PosCustomerGroupService } from "./posCustomerGroup.service";
import { PosCustomerGroupController } from "./posCustomerGroup.controller";
import { PosCustomerGroupResolver } from "./posCustomerGroup.resolver";

@Module({
  imports: [PosCustomerGroupModuleBase],
  controllers: [PosCustomerGroupController],
  providers: [PosCustomerGroupService, PosCustomerGroupResolver],
  exports: [PosCustomerGroupService],
})
export class PosCustomerGroupModule {}
