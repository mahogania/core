import { Module } from "@nestjs/common";
import { EmailCampaignModuleBase } from "./base/emailCampaign.module.base";
import { EmailCampaignService } from "./emailCampaign.service";
import { EmailCampaignController } from "./emailCampaign.controller";
import { EmailCampaignResolver } from "./emailCampaign.resolver";

@Module({
  imports: [EmailCampaignModuleBase],
  controllers: [EmailCampaignController],
  providers: [EmailCampaignService, EmailCampaignResolver],
  exports: [EmailCampaignService],
})
export class EmailCampaignModule {}
