import { Module } from "@nestjs/common";
import { ItemSupplierModuleBase } from "./base/itemSupplier.module.base";
import { ItemSupplierService } from "./itemSupplier.service";
import { ItemSupplierController } from "./itemSupplier.controller";
import { ItemSupplierResolver } from "./itemSupplier.resolver";

@Module({
  imports: [ItemSupplierModuleBase],
  controllers: [ItemSupplierController],
  providers: [ItemSupplierService, ItemSupplierResolver],
  exports: [ItemSupplierService],
})
export class ItemSupplierModule {}
