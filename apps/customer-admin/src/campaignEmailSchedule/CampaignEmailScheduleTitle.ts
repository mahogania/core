import { CampaignEmailSchedule as TCampaignEmailSchedule } from "../api/campaignEmailSchedule/CampaignEmailSchedule";

export const CAMPAIGNEMAILSCHEDULE_TITLE_FIELD = "emailTemplate";

export const CampaignEmailScheduleTitle = (
  record: TCampaignEmailSchedule
): string => {
  return record.emailTemplate?.toString() || String(record.id);
};
