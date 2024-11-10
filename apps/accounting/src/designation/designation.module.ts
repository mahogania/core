import { Module } from "@nestjs/common";
import { DesignationModuleBase } from "./base/designation.module.base";
import { DesignationService } from "./designation.service";
import { DesignationController } from "./designation.controller";
import { DesignationResolver } from "./designation.resolver";

@Module({
  imports: [DesignationModuleBase],
  controllers: [DesignationController],
  providers: [DesignationService, DesignationResolver],
  exports: [DesignationService],
})
export class DesignationModule {}
