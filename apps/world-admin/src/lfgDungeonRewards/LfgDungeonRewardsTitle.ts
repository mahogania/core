import { LfgDungeonRewards as TLfgDungeonRewards } from "../api/lfgDungeonRewards/LfgDungeonRewards";

export const LFGDUNGEONREWARDS_TITLE_FIELD = "id";

export const LfgDungeonRewardsTitle = (record: TLfgDungeonRewards): string => {
  return record.id?.toString() || String(record.id);
};
