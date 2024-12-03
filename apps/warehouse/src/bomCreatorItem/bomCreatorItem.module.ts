import { Module } from "@nestjs/common";
import { BomCreatorItemModuleBase } from "./base/bomCreatorItem.module.base";
import { BomCreatorItemService } from "./bomCreatorItem.service";
import { BomCreatorItemController } from "./bomCreatorItem.controller";
import { BomCreatorItemResolver } from "./bomCreatorItem.resolver";

@Module({
  imports: [BomCreatorItemModuleBase],
  controllers: [BomCreatorItemController],
  providers: [BomCreatorItemService, BomCreatorItemResolver],
  exports: [BomCreatorItemService],
})
export class BomCreatorItemModule {}
