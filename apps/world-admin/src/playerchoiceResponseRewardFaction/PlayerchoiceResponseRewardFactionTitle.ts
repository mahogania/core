import { PlayerchoiceResponseRewardFaction as TPlayerchoiceResponseRewardFaction } from "../api/playerchoiceResponseRewardFaction/PlayerchoiceResponseRewardFaction";

export const PLAYERCHOICERESPONSEREWARDFACTION_TITLE_FIELD = "id";

export const PlayerchoiceResponseRewardFactionTitle = (
  record: TPlayerchoiceResponseRewardFaction
): string => {
  return record.id?.toString() || String(record.id);
};
