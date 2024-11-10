import { Module } from "@nestjs/common";
import { ItemTaxModuleBase } from "./base/itemTax.module.base";
import { ItemTaxService } from "./itemTax.service";
import { ItemTaxController } from "./itemTax.controller";
import { ItemTaxResolver } from "./itemTax.resolver";

@Module({
  imports: [ItemTaxModuleBase],
  controllers: [ItemTaxController],
  providers: [ItemTaxService, ItemTaxResolver],
  exports: [ItemTaxService],
})
export class ItemTaxModule {}
