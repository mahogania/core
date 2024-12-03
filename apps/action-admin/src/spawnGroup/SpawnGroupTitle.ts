import { SpawnGroup as TSpawnGroup } from "../api/spawnGroup/SpawnGroup";

export const SPAWNGROUP_TITLE_FIELD = "id";

export const SpawnGroupTitle = (record: TSpawnGroup): string => {
  return record.id?.toString() || String(record.id);
};
