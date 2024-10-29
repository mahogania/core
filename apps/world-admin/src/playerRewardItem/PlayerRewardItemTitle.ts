import { PlayerRewardItem as TPlayerRewardItem } from "../api/playerRewardItem/PlayerRewardItem";

export const PLAYERREWARDITEM_TITLE_FIELD = "id";

export const PlayerRewardItemTitle = (record: TPlayerRewardItem): string => {
  return record.id?.toString() || String(record.id);
};
