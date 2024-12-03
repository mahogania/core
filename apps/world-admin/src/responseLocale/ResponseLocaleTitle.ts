import { ResponseLocale as TResponseLocale } from "../api/responseLocale/ResponseLocale";

export const RESPONSELOCALE_TITLE_FIELD = "id";

export const ResponseLocaleTitle = (record: TResponseLocale): string => {
  return record.id?.toString() || String(record.id);
};
