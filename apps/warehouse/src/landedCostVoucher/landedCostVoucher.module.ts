import { Module } from "@nestjs/common";
import { LandedCostVoucherModuleBase } from "./base/landedCostVoucher.module.base";
import { LandedCostVoucherService } from "./landedCostVoucher.service";
import { LandedCostVoucherController } from "./landedCostVoucher.controller";
import { LandedCostVoucherResolver } from "./landedCostVoucher.resolver";

@Module({
  imports: [LandedCostVoucherModuleBase],
  controllers: [LandedCostVoucherController],
  providers: [LandedCostVoucherService, LandedCostVoucherResolver],
  exports: [LandedCostVoucherService],
})
export class LandedCostVoucherModule {}
