import { Module } from "@nestjs/common";
import { PackedItemModuleBase } from "./base/packedItem.module.base";
import { PackedItemService } from "./packedItem.service";
import { PackedItemController } from "./packedItem.controller";
import { PackedItemResolver } from "./packedItem.resolver";

@Module({
  imports: [PackedItemModuleBase],
  controllers: [PackedItemController],
  providers: [PackedItemService, PackedItemResolver],
  exports: [PackedItemService],
})
export class PackedItemModule {}
