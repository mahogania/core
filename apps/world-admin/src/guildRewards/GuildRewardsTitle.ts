import { GuildRewards as TGuildRewards } from "../api/guildRewards/GuildRewards";

export const GUILDREWARDS_TITLE_FIELD = "id";

export const GuildRewardsTitle = (record: TGuildRewards): string => {
  return record.id?.toString() || String(record.id);
};
