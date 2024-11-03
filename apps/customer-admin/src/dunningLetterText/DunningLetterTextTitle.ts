import { DunningLetterText as TDunningLetterText } from "../api/dunningLetterText/DunningLetterText";

export const DUNNINGLETTERTEXT_TITLE_FIELD = "name";

export const DunningLetterTextTitle = (record: TDunningLetterText): string => {
  return record.name?.toString() || String(record.id);
};
