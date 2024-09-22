import { PlayerchoiceResponseReward as TPlayerchoiceResponseReward } from "../api/playerchoiceResponseReward/PlayerchoiceResponseReward";

export const PLAYERCHOICERESPONSEREWARD_TITLE_FIELD = "id";

export const PlayerchoiceResponseRewardTitle = (
  record: TPlayerchoiceResponseReward
): string => {
  return record.id?.toString() || String(record.id);
};
