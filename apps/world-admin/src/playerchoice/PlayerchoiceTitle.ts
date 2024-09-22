import { Playerchoice as TPlayerchoice } from "../api/playerchoice/Playerchoice";

export const PLAYERCHOICE_TITLE_FIELD = "id";

export const PlayerchoiceTitle = (record: TPlayerchoice): string => {
  return record.id?.toString() || String(record.id);
};
