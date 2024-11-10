import { ChoiceLocale as TChoiceLocale } from "../api/choiceLocale/ChoiceLocale";

export const CHOICELOCALE_TITLE_FIELD = "id";

export const ChoiceLocaleTitle = (record: TChoiceLocale): string => {
  return record.id?.toString() || String(record.id);
};
