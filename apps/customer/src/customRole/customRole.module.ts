import { Module } from "@nestjs/common";
import { CustomRoleModuleBase } from "./base/customRole.module.base";
import { CustomRoleService } from "./customRole.service";
import { CustomRoleController } from "./customRole.controller";
import { CustomRoleResolver } from "./customRole.resolver";

@Module({
  imports: [CustomRoleModuleBase],
  controllers: [CustomRoleController],
  providers: [CustomRoleService, CustomRoleResolver],
  exports: [CustomRoleService],
})
export class CustomRoleModule {}
