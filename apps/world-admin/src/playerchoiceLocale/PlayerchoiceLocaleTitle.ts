import { PlayerchoiceLocale as TPlayerchoiceLocale } from "../api/playerchoiceLocale/PlayerchoiceLocale";

export const PLAYERCHOICELOCALE_TITLE_FIELD = "id";

export const PlayerchoiceLocaleTitle = (
  record: TPlayerchoiceLocale
): string => {
  return record.id?.toString() || String(record.id);
};
