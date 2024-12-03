import { Module } from "@nestjs/common";
import { CampaignItemModuleBase } from "./base/campaignItem.module.base";
import { CampaignItemService } from "./campaignItem.service";
import { CampaignItemController } from "./campaignItem.controller";
import { CampaignItemResolver } from "./campaignItem.resolver";

@Module({
  imports: [CampaignItemModuleBase],
  controllers: [CampaignItemController],
  providers: [CampaignItemService, CampaignItemResolver],
  exports: [CampaignItemService],
})
export class CampaignItemModule {}
