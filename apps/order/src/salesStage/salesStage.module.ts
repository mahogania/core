import { Module } from "@nestjs/common";
import { SalesStageModuleBase } from "./base/salesStage.module.base";
import { SalesStageService } from "./salesStage.service";
import { SalesStageController } from "./salesStage.controller";
import { SalesStageResolver } from "./salesStage.resolver";

@Module({
  imports: [SalesStageModuleBase],
  controllers: [SalesStageController],
  providers: [SalesStageService, SalesStageResolver],
  exports: [SalesStageService],
})
export class SalesStageModule {}
