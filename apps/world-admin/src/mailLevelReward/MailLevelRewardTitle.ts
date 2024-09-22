import { MailLevelReward as TMailLevelReward } from "../api/mailLevelReward/MailLevelReward";

export const MAILLEVELREWARD_TITLE_FIELD = "id";

export const MailLevelRewardTitle = (record: TMailLevelReward): string => {
  return record.id?.toString() || String(record.id);
};
