import { Module } from "@nestjs/common";
import { DrivingLicenseCategoryModuleBase } from "./base/drivingLicenseCategory.module.base";
import { DrivingLicenseCategoryService } from "./drivingLicenseCategory.service";
import { DrivingLicenseCategoryController } from "./drivingLicenseCategory.controller";
import { DrivingLicenseCategoryResolver } from "./drivingLicenseCategory.resolver";

@Module({
  imports: [DrivingLicenseCategoryModuleBase],
  controllers: [DrivingLicenseCategoryController],
  providers: [DrivingLicenseCategoryService, DrivingLicenseCategoryResolver],
  exports: [DrivingLicenseCategoryService],
})
export class DrivingLicenseCategoryModule {}
