import { Module } from "@nestjs/common";
import { ItemDefaultModuleBase } from "./base/itemDefault.module.base";
import { ItemDefaultService } from "./itemDefault.service";
import { ItemDefaultController } from "./itemDefault.controller";
import { ItemDefaultResolver } from "./itemDefault.resolver";

@Module({
  imports: [ItemDefaultModuleBase],
  controllers: [ItemDefaultController],
  providers: [ItemDefaultService, ItemDefaultResolver],
  exports: [ItemDefaultService],
})
export class ItemDefaultModule {}
