import { PageText as TPageText } from "../api/pageText/PageText";

export const PAGETEXT_TITLE_FIELD = "id";

export const PageTextTitle = (record: TPageText): string => {
  return record.id?.toString() || String(record.id);
};
