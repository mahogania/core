import { Module } from "@nestjs/common";
import { ItemVariantModuleBase } from "./base/itemVariant.module.base";
import { ItemVariantService } from "./itemVariant.service";
import { ItemVariantController } from "./itemVariant.controller";
import { ItemVariantResolver } from "./itemVariant.resolver";

@Module({
  imports: [ItemVariantModuleBase],
  controllers: [ItemVariantController],
  providers: [ItemVariantService, ItemVariantResolver],
  exports: [ItemVariantService],
})
export class ItemVariantModule {}
