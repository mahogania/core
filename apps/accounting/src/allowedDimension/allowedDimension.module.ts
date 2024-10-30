import { Module } from "@nestjs/common";
import { AllowedDimensionModuleBase } from "./base/allowedDimension.module.base";
import { AllowedDimensionService } from "./allowedDimension.service";
import { AllowedDimensionController } from "./allowedDimension.controller";
import { AllowedDimensionResolver } from "./allowedDimension.resolver";

@Module({
  imports: [AllowedDimensionModuleBase],
  controllers: [AllowedDimensionController],
  providers: [AllowedDimensionService, AllowedDimensionResolver],
  exports: [AllowedDimensionService],
})
export class AllowedDimensionModule {}
