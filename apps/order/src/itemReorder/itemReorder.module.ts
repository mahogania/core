import { Module } from "@nestjs/common";
import { ItemReorderModuleBase } from "./base/itemReorder.module.base";
import { ItemReorderService } from "./itemReorder.service";
import { ItemReorderController } from "./itemReorder.controller";
import { ItemReorderResolver } from "./itemReorder.resolver";

@Module({
  imports: [ItemReorderModuleBase],
  controllers: [ItemReorderController],
  providers: [ItemReorderService, ItemReorderResolver],
  exports: [ItemReorderService],
})
export class ItemReorderModule {}
