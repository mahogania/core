import { Module } from "@nestjs/common";
import { PurchaseReceiptItemSuppliedModuleBase } from "./base/purchaseReceiptItemSupplied.module.base";
import { PurchaseReceiptItemSuppliedService } from "./purchaseReceiptItemSupplied.service";
import { PurchaseReceiptItemSuppliedController } from "./purchaseReceiptItemSupplied.controller";
import { PurchaseReceiptItemSuppliedResolver } from "./purchaseReceiptItemSupplied.resolver";

@Module({
  imports: [PurchaseReceiptItemSuppliedModuleBase],
  controllers: [PurchaseReceiptItemSuppliedController],
  providers: [
    PurchaseReceiptItemSuppliedService,
    PurchaseReceiptItemSuppliedResolver,
  ],
  exports: [PurchaseReceiptItemSuppliedService],
})
export class PurchaseReceiptItemSuppliedModule {}
