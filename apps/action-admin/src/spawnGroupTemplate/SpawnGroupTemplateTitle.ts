import { SpawnGroupTemplate as TSpawnGroupTemplate } from "../api/spawnGroupTemplate/SpawnGroupTemplate";

export const SPAWNGROUPTEMPLATE_TITLE_FIELD = "id";

export const SpawnGroupTemplateTitle = (
  record: TSpawnGroupTemplate
): string => {
  return record.id?.toString() || String(record.id);
};
