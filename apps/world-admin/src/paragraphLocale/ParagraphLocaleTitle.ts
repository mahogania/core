import { ParagraphLocale as TParagraphLocale } from "../api/paragraphLocale/ParagraphLocale";

export const PARAGRAPHLOCALE_TITLE_FIELD = "id";

export const ParagraphLocaleTitle = (record: TParagraphLocale): string => {
  return record.id?.toString() || String(record.id);
};
