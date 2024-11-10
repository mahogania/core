import { Module } from "@nestjs/common";
import { ItemPriceModuleBase } from "./base/itemPrice.module.base";
import { ItemPriceService } from "./itemPrice.service";
import { ItemPriceController } from "./itemPrice.controller";
import { ItemPriceResolver } from "./itemPrice.resolver";

@Module({
  imports: [ItemPriceModuleBase],
  controllers: [ItemPriceController],
  providers: [ItemPriceService, ItemPriceResolver],
  exports: [ItemPriceService],
})
export class ItemPriceModule {}
