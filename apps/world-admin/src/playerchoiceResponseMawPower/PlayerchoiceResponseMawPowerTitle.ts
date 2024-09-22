import { PlayerchoiceResponseMawPower as TPlayerchoiceResponseMawPower } from "../api/playerchoiceResponseMawPower/PlayerchoiceResponseMawPower";

export const PLAYERCHOICERESPONSEMAWPOWER_TITLE_FIELD = "id";

export const PlayerchoiceResponseMawPowerTitle = (
  record: TPlayerchoiceResponseMawPower
): string => {
  return record.id?.toString() || String(record.id);
};
