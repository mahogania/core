import { InstanceSpawnGroups as TInstanceSpawnGroups } from "../api/instanceSpawnGroups/InstanceSpawnGroups";

export const INSTANCESPAWNGROUPS_TITLE_FIELD = "id";

export const InstanceSpawnGroupsTitle = (
  record: TInstanceSpawnGroups
): string => {
  return record.id?.toString() || String(record.id);
};
