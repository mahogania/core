import { Module } from "@nestjs/common";
import { WarrantyClaimModuleBase } from "./base/warrantyClaim.module.base";
import { WarrantyClaimService } from "./warrantyClaim.service";
import { WarrantyClaimController } from "./warrantyClaim.controller";
import { WarrantyClaimResolver } from "./warrantyClaim.resolver";

@Module({
  imports: [WarrantyClaimModuleBase],
  controllers: [WarrantyClaimController],
  providers: [WarrantyClaimService, WarrantyClaimResolver],
  exports: [WarrantyClaimService],
})
export class WarrantyClaimModule {}
