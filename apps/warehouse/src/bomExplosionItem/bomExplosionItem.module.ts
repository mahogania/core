import { Module } from "@nestjs/common";
import { BomExplosionItemModuleBase } from "./base/bomExplosionItem.module.base";
import { BomExplosionItemService } from "./bomExplosionItem.service";
import { BomExplosionItemController } from "./bomExplosionItem.controller";
import { BomExplosionItemResolver } from "./bomExplosionItem.resolver";

@Module({
  imports: [BomExplosionItemModuleBase],
  controllers: [BomExplosionItemController],
  providers: [BomExplosionItemService, BomExplosionItemResolver],
  exports: [BomExplosionItemService],
})
export class BomExplosionItemModule {}
