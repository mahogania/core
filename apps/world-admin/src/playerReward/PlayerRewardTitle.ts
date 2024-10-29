import { PlayerReward as TPlayerReward } from "../api/playerReward/PlayerReward";

export const PLAYERREWARD_TITLE_FIELD = "id";

export const PlayerRewardTitle = (record: TPlayerReward): string => {
  return record.id?.toString() || String(record.id);
};
