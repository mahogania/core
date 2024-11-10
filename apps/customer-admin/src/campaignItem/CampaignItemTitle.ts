import { CampaignItem as TCampaignItem } from "../api/campaignItem/CampaignItem";

export const CAMPAIGNITEM_TITLE_FIELD = "campaign";

export const CampaignItemTitle = (record: TCampaignItem): string => {
  return record.campaign?.toString() || String(record.id);
};
