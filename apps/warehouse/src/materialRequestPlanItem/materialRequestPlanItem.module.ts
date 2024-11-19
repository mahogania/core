import { Module } from "@nestjs/common";
import { MaterialRequestPlanItemModuleBase } from "./base/materialRequestPlanItem.module.base";
import { MaterialRequestPlanItemService } from "./materialRequestPlanItem.service";
import { MaterialRequestPlanItemController } from "./materialRequestPlanItem.controller";
import { MaterialRequestPlanItemResolver } from "./materialRequestPlanItem.resolver";

@Module({
  imports: [MaterialRequestPlanItemModuleBase],
  controllers: [MaterialRequestPlanItemController],
  providers: [MaterialRequestPlanItemService, MaterialRequestPlanItemResolver],
  exports: [MaterialRequestPlanItemService],
})
export class MaterialRequestPlanItemModule {}
