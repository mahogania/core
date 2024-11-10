import { Module } from "@nestjs/common";
import { CampaignEmailScheduleModuleBase } from "./base/campaignEmailSchedule.module.base";
import { CampaignEmailScheduleService } from "./campaignEmailSchedule.service";
import { CampaignEmailScheduleController } from "./campaignEmailSchedule.controller";
import { CampaignEmailScheduleResolver } from "./campaignEmailSchedule.resolver";

@Module({
  imports: [CampaignEmailScheduleModuleBase],
  controllers: [CampaignEmailScheduleController],
  providers: [CampaignEmailScheduleService, CampaignEmailScheduleResolver],
  exports: [CampaignEmailScheduleService],
})
export class CampaignEmailScheduleModule {}
