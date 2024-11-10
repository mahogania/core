import { Paragraph as TParagraph } from "../api/paragraph/Paragraph";

export const PARAGRAPH_TITLE_FIELD = "id";

export const ParagraphTitle = (record: TParagraph): string => {
  return record.id?.toString() || String(record.id);
};
