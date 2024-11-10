import { Module } from "@nestjs/common";
import { ItemAttributeModuleBase } from "./base/itemAttribute.module.base";
import { ItemAttributeService } from "./itemAttribute.service";
import { ItemAttributeController } from "./itemAttribute.controller";
import { ItemAttributeResolver } from "./itemAttribute.resolver";

@Module({
  imports: [ItemAttributeModuleBase],
  controllers: [ItemAttributeController],
  providers: [ItemAttributeService, ItemAttributeResolver],
  exports: [ItemAttributeService],
})
export class ItemAttributeModule {}
