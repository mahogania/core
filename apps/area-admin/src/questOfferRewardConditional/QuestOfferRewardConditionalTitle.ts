import { QuestOfferRewardConditional as TQuestOfferRewardConditional } from "../api/questOfferRewardConditional/QuestOfferRewardConditional";

export const QUESTOFFERREWARDCONDITIONAL_TITLE_FIELD = "id";

export const QuestOfferRewardConditionalTitle = (
  record: TQuestOfferRewardConditional
): string => {
  return record.id?.toString() || String(record.id);
};
