import { PlayerchoiceResponseLocale as TPlayerchoiceResponseLocale } from "../api/playerchoiceResponseLocale/PlayerchoiceResponseLocale";

export const PLAYERCHOICERESPONSELOCALE_TITLE_FIELD = "id";

export const PlayerchoiceResponseLocaleTitle = (
  record: TPlayerchoiceResponseLocale
): string => {
  return record.id?.toString() || String(record.id);
};
