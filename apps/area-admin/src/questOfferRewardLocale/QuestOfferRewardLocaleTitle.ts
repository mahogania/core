import { QuestOfferRewardLocale as TQuestOfferRewardLocale } from "../api/questOfferRewardLocale/QuestOfferRewardLocale";

export const QUESTOFFERREWARDLOCALE_TITLE_FIELD = "id";

export const QuestOfferRewardLocaleTitle = (
  record: TQuestOfferRewardLocale
): string => {
  return record.id?.toString() || String(record.id);
};
