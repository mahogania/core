import { PageTextLocale as TPageTextLocale } from "../api/pageTextLocale/PageTextLocale";

export const PAGETEXTLOCALE_TITLE_FIELD = "id";

export const PageTextLocaleTitle = (record: TPageTextLocale): string => {
  return record.id?.toString() || String(record.id);
};
