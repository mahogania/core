import { PlayerCraft as TPlayerCraft } from "../api/playerCraft/PlayerCraft";

export const PLAYERCRAFT_TITLE_FIELD = "id";

export const PlayerCraftTitle = (record: TPlayerCraft): string => {
  return record.id?.toString() || String(record.id);
};
