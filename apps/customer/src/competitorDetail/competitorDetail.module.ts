import { Module } from "@nestjs/common";
import { CompetitorDetailModuleBase } from "./base/competitorDetail.module.base";
import { CompetitorDetailService } from "./competitorDetail.service";
import { CompetitorDetailController } from "./competitorDetail.controller";
import { CompetitorDetailResolver } from "./competitorDetail.resolver";

@Module({
  imports: [CompetitorDetailModuleBase],
  controllers: [CompetitorDetailController],
  providers: [CompetitorDetailService, CompetitorDetailResolver],
  exports: [CompetitorDetailService],
})
export class CompetitorDetailModule {}
