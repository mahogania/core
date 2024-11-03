import { World as TWorld } from "../api/world/World";

export const WORLD_TITLE_FIELD = "id";

export const WorldTitle = (record: TWorld): string => {
  return record.id?.toString() || String(record.id);
};
