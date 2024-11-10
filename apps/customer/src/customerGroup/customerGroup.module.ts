import { Module } from "@nestjs/common";
import { CustomerGroupModuleBase } from "./base/customerGroup.module.base";
import { CustomerGroupService } from "./customerGroup.service";
import { CustomerGroupController } from "./customerGroup.controller";
import { CustomerGroupResolver } from "./customerGroup.resolver";

@Module({
  imports: [CustomerGroupModuleBase],
  controllers: [CustomerGroupController],
  providers: [CustomerGroupService, CustomerGroupResolver],
  exports: [CustomerGroupService],
})
export class CustomerGroupModule {}
