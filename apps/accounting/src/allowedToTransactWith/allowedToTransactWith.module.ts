import { Module } from "@nestjs/common";
import { AllowedToTransactWithModuleBase } from "./base/allowedToTransactWith.module.base";
import { AllowedToTransactWithService } from "./allowedToTransactWith.service";
import { AllowedToTransactWithController } from "./allowedToTransactWith.controller";
import { AllowedToTransactWithResolver } from "./allowedToTransactWith.resolver";

@Module({
  imports: [AllowedToTransactWithModuleBase],
  controllers: [AllowedToTransactWithController],
  providers: [AllowedToTransactWithService, AllowedToTransactWithResolver],
  exports: [AllowedToTransactWithService],
})
export class AllowedToTransactWithModule {}
