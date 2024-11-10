import { Module } from "@nestjs/common";
import { CompetitorModuleBase } from "./base/competitor.module.base";
import { CompetitorService } from "./competitor.service";
import { CompetitorController } from "./competitor.controller";
import { CompetitorResolver } from "./competitor.resolver";

@Module({
  imports: [CompetitorModuleBase],
  controllers: [CompetitorController],
  providers: [CompetitorService, CompetitorResolver],
  exports: [CompetitorService],
})
export class CompetitorModule {}
