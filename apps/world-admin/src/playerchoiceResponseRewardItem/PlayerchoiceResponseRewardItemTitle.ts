import { PlayerchoiceResponseRewardItem as TPlayerchoiceResponseRewardItem } from "../api/playerchoiceResponseRewardItem/PlayerchoiceResponseRewardItem";

export const PLAYERCHOICERESPONSEREWARDITEM_TITLE_FIELD = "id";

export const PlayerchoiceResponseRewardItemTitle = (
  record: TPlayerchoiceResponseRewardItem
): string => {
  return record.id?.toString() || String(record.id);
};
