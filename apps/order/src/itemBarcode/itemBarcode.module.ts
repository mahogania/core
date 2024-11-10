import { Module } from "@nestjs/common";
import { ItemBarcodeModuleBase } from "./base/itemBarcode.module.base";
import { ItemBarcodeService } from "./itemBarcode.service";
import { ItemBarcodeController } from "./itemBarcode.controller";
import { ItemBarcodeResolver } from "./itemBarcode.resolver";

@Module({
  imports: [ItemBarcodeModuleBase],
  controllers: [ItemBarcodeController],
  providers: [ItemBarcodeService, ItemBarcodeResolver],
  exports: [ItemBarcodeService],
})
export class ItemBarcodeModule {}
