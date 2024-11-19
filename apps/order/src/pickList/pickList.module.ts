import { Module } from "@nestjs/common";
import { PickListModuleBase } from "./base/pickList.module.base";
import { PickListService } from "./pickList.service";
import { PickListController } from "./pickList.controller";
import { PickListResolver } from "./pickList.resolver";

@Module({
  imports: [PickListModuleBase],
  controllers: [PickListController],
  providers: [PickListService, PickListResolver],
  exports: [PickListService],
})
export class PickListModule {}
