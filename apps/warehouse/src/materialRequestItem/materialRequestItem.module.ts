import { Module } from "@nestjs/common";
import { MaterialRequestItemModuleBase } from "./base/materialRequestItem.module.base";
import { MaterialRequestItemService } from "./materialRequestItem.service";
import { MaterialRequestItemController } from "./materialRequestItem.controller";
import { MaterialRequestItemResolver } from "./materialRequestItem.resolver";

@Module({
  imports: [MaterialRequestItemModuleBase],
  controllers: [MaterialRequestItemController],
  providers: [MaterialRequestItemService, MaterialRequestItemResolver],
  exports: [MaterialRequestItemService],
})
export class MaterialRequestItemModule {}
