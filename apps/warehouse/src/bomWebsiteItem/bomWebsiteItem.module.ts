import { Module } from "@nestjs/common";
import { BomWebsiteItemModuleBase } from "./base/bomWebsiteItem.module.base";
import { BomWebsiteItemService } from "./bomWebsiteItem.service";
import { BomWebsiteItemController } from "./bomWebsiteItem.controller";
import { BomWebsiteItemResolver } from "./bomWebsiteItem.resolver";

@Module({
  imports: [BomWebsiteItemModuleBase],
  controllers: [BomWebsiteItemController],
  providers: [BomWebsiteItemService, BomWebsiteItemResolver],
  exports: [BomWebsiteItemService],
})
export class BomWebsiteItemModule {}
