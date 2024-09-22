import { QuestOfferReward as TQuestOfferReward } from "../api/questOfferReward/QuestOfferReward";

export const QUESTOFFERREWARD_TITLE_FIELD = "id";

export const QuestOfferRewardTitle = (record: TQuestOfferReward): string => {
  return record.id?.toString() || String(record.id);
};
