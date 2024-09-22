import { CreatureQuestCurrency as TCreatureQuestCurrency } from "../api/creatureQuestCurrency/CreatureQuestCurrency";

export const CREATUREQUESTCURRENCY_TITLE_FIELD = "id";

export const CreatureQuestCurrencyTitle = (
  record: TCreatureQuestCurrency
): string => {
  return record.id?.toString() || String(record.id);
};
