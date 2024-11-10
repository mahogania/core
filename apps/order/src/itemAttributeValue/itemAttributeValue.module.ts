import { Module } from "@nestjs/common";
import { ItemAttributeValueModuleBase } from "./base/itemAttributeValue.module.base";
import { ItemAttributeValueService } from "./itemAttributeValue.service";
import { ItemAttributeValueController } from "./itemAttributeValue.controller";
import { ItemAttributeValueResolver } from "./itemAttributeValue.resolver";

@Module({
  imports: [ItemAttributeValueModuleBase],
  controllers: [ItemAttributeValueController],
  providers: [ItemAttributeValueService, ItemAttributeValueResolver],
  exports: [ItemAttributeValueService],
})
export class ItemAttributeValueModule {}
