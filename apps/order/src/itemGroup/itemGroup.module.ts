import { Module } from "@nestjs/common";
import { ItemGroupModuleBase } from "./base/itemGroup.module.base";
import { ItemGroupService } from "./itemGroup.service";
import { ItemGroupController } from "./itemGroup.controller";
import { ItemGroupResolver } from "./itemGroup.resolver";

@Module({
  imports: [ItemGroupModuleBase],
  controllers: [ItemGroupController],
  providers: [ItemGroupService, ItemGroupResolver],
  exports: [ItemGroupService],
})
export class ItemGroupModule {}
