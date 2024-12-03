import { EmailCampaign as TEmailCampaign } from "../api/emailCampaign/EmailCampaign";

export const EMAILCAMPAIGN_TITLE_FIELD = "campaignName";

export const EmailCampaignTitle = (record: TEmailCampaign): string => {
  return record.campaignName?.toString() || String(record.id);
};
