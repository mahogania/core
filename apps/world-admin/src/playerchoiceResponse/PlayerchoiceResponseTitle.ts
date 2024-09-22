import { PlayerchoiceResponse as TPlayerchoiceResponse } from "../api/playerchoiceResponse/PlayerchoiceResponse";

export const PLAYERCHOICERESPONSE_TITLE_FIELD = "id";

export const PlayerchoiceResponseTitle = (
  record: TPlayerchoiceResponse
): string => {
  return record.id?.toString() || String(record.id);
};
