import { Module } from "@nestjs/common";
import { BomScrapItemModuleBase } from "./base/bomScrapItem.module.base";
import { BomScrapItemService } from "./bomScrapItem.service";
import { BomScrapItemController } from "./bomScrapItem.controller";
import { BomScrapItemResolver } from "./bomScrapItem.resolver";

@Module({
  imports: [BomScrapItemModuleBase],
  controllers: [BomScrapItemController],
  providers: [BomScrapItemService, BomScrapItemResolver],
  exports: [BomScrapItemService],
})
export class BomScrapItemModule {}
