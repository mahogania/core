import { Module } from "@nestjs/common";
import { LandedCostPurchaseReceiptModuleBase } from "./base/landedCostPurchaseReceipt.module.base";
import { LandedCostPurchaseReceiptService } from "./landedCostPurchaseReceipt.service";
import { LandedCostPurchaseReceiptController } from "./landedCostPurchaseReceipt.controller";
import { LandedCostPurchaseReceiptResolver } from "./landedCostPurchaseReceipt.resolver";

@Module({
  imports: [LandedCostPurchaseReceiptModuleBase],
  controllers: [LandedCostPurchaseReceiptController],
  providers: [
    LandedCostPurchaseReceiptService,
    LandedCostPurchaseReceiptResolver,
  ],
  exports: [LandedCostPurchaseReceiptService],
})
export class LandedCostPurchaseReceiptModule {}
